import { Request, Response } from "express";
import { RecipesDatabase } from "../../data/recipes/recipesDatabase";
import { Recipes } from "../../entities/recipes/recipes";
import { FormatDate } from "../../services/dataFormat";
import { idGenerator } from "../../services/idGenerator";
import { jsonWebToken } from "../../services/JsonWebToken";

export const createRecipe = async(
    req: Request,
    res:Response
) => {
    try {
        const id = new idGenerator().generateId()
        if (!req.headers.authorization) {
            throw new Error("Please, login to create a recipe.")
        }
        if (!req.body.title) {
            throw new Error("Title is empty.")
        }
        if (!req.body.description) {
            throw new Error("Description is empty.")
        }
        const userId = await new jsonWebToken().getData(req.headers.authorization)

        const date = new FormatDate(new Date()).formatUTC()
        
        const recipeData = new Recipes(id, req.body.title, req.body.description, date, userId?.id)

        await new RecipesDatabase().createRecipe(recipeData)
        
        res.status(200).send("Recipe has been created.")
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}