import { Request, Response } from "express";
import { FollowBaseDatabase } from "../../data/follow/FollowBaseDatabase";
import { Follow } from "../../entities/follow/follow";
import { jsonWebToken } from "../../services/JsonWebToken";

export const addFollow = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.headers.authorization) {
            throw new Error("Please, logged in to follow someone.")
        }

        if (!req.body.userId) {
            throw new Error("Inform the user who you want to follow.")
        }

        const followerId = new jsonWebToken().getData(req.headers.authorization)

        if (!followerId) {
            throw new Error("User not found.")
        }
        const followedId = new jsonWebToken().getData(req.body.userId)
        if (!followedId) {
            throw new Error("User who you want follow not found.")
        }

        const follow = new Follow(followerId.id, followedId.id)
        await new FollowBaseDatabase().addFollow(follow)
        res.status(200).send("Sucess.")
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}