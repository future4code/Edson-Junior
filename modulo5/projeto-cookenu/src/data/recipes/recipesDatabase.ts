
import { Recipes } from "../../entities/recipes/recipes";
import { BaseDatabase } from "../BaseDatabase";

export class RecipesDatabase extends BaseDatabase {
    private static tableName = "recipes"

    createRecipe = (input: Recipes) => BaseDatabase
        .connection(RecipesDatabase.tableName).insert({
            id: input.getId(),
            title: input.getTitle(),
            description: input.getDescription(),
            create_at: input.getCreateAt(),
            user_id: input.getUserId(),
        })
    getRecipeById = (recipeId: string) => BaseDatabase
        .connection(RecipesDatabase.tableName)
        .select("*")
        .where("id", recipeId)
}