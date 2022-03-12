import { Request, Response } from "express";
import { FeedBaseDatabase } from "../../data/feed/feedBaseDatabase";
import { FollowBaseDatabase } from "../../data/follow/FollowBaseDatabase";
import { Feed } from "../../entities/feed/feed";
import { jsonWebToken } from "../../services/JsonWebToken";

export const getFeed = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.headers.authorization) {
            throw new Error("Please, login to get feed.")
        }
        
        const userId = await new jsonWebToken().getData(req.headers.authorization)

        if (!userId) {
            throw new Error("User not found.")
        }

        const [followed] = await new FollowBaseDatabase().getFollowById(userId.id)
        
        // const feedData = []

        // for (let i of followed) {
        //     feedData.push(await new FeedBaseDatabase().getFeed(followed.followed))
        // }
        const feedData = await new FeedBaseDatabase().getFeed(followed.followed)

        if (feedData.length === 0) {
            throw new Error("No recipes.")
        }

        res.status(200).send({recipes: [feedData]})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}