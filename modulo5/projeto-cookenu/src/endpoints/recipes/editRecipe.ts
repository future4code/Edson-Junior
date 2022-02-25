import { Request, Response } from "express"
import { RecipesDatabase } from "../../data/recipes/recipesDatabase"
import { jsonWebToken } from "../../services/JsonWebToken"

export const editRecipe = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.headers.authorization) {
            throw new Error("Please, login for request a recipe.")
        }
        const userId = new jsonWebToken().getData(req.headers.authorization)

        if (!userId) {
            throw new Error("User not found.")
        }

        const [recipeData] = await new RecipesDatabase().getRecipeById(req.body.id)

        if (!recipeData) {
            throw new Error("Recipe not found.")
        }

        if (userId.id !== recipeData.user_id && userId.role !== "ADMIN") {
            throw new Error("User unauthorized.")
        }

        await new RecipesDatabase().editRecipe(req.body.id, req.body.description)

        res.status(200).send("Recipe has been updated.")
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}