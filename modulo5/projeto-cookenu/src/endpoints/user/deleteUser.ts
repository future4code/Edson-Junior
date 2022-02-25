import { Request, Response } from "express"
import { FollowBaseDatabase } from "../../data/follow/FollowBaseDatabase"
import { RecipesDatabase } from "../../data/recipes/recipesDatabase"
import { UserDatabase } from "../../data/user/userDatabase"
import { jsonWebToken } from "../../services/JsonWebToken"

export const deleteUser = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.headers.authorization) {
            throw new Error("Please, login for request a recipe.")
        }

        const userId = new jsonWebToken().getData(req.headers.authorization)
        const userToDelete = new jsonWebToken().getData(req.body.id)

        if (!userToDelete) {
            throw new Error("Please, check who you want delete")
        }

        if (!userId) {
            throw new Error("User not found.")
        }

        if (userToDelete.id !== userId.id && userId.role !== "ADMIN") {
            throw new Error("User unauthorized.")
        }

        await new FollowBaseDatabase().deleteFollow(userId.id)
        await new RecipesDatabase().deleteAllRecipes(userId.id)
        await new UserDatabase().deleteUser(userId.id)

        res.status(200).send("User has been deleted.")
    } catch (error: any) {
        res.status(200).send(error.message)
    }
}