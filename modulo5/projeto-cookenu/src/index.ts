import { app } from "./app"
import { addFollow } from "./endpoints/follow/addFollow"
import { createRecipe } from "./endpoints/recipes/createRecipe"
import { getRecipesById } from "./endpoints/recipes/getRecipeById"
import { createUser } from "./endpoints/user/createUser"
import { getUserProfile } from "./endpoints/user/getUserProfile"
import { login } from "./endpoints/user/login"
import { Follow } from "./entities/follow/follow"

app.post("/user/signup", createUser)
app.post("/user/login", login)
app.post("/user/profile", getUserProfile)

app.post("recipe", createRecipe)
app.get("/recipe/:id", getRecipesById)

app.post("/user/follow", addFollow)