import { app } from "./app"
import { editRecipe } from "./endpoints/recipes/editRecipe"
import { getFeed } from "./endpoints/feed/getFeed"
import { addFollow } from "./endpoints/follow/addFollow"
import { createRecipe } from "./endpoints/recipes/createRecipe"
import { getRecipesById } from "./endpoints/recipes/getRecipeById"
import { createUser } from "./endpoints/user/createUser"
import { getUserProfile } from "./endpoints/user/getUserProfile"
import { login } from "./endpoints/user/login"
import { deleteRecipe } from "./endpoints/recipes/deleteRecipe"
import { deleteUser } from "./endpoints/user/deleteUser"
import { forgotPassword } from "./endpoints/user/forgotPassword"
import { changePassword } from "./endpoints/user/changePassword"



app.post("/user/signup", createUser)
app.post("/user/login", login)
app.post("/user/profile", getUserProfile)
app.post("/user/forgotPassword", forgotPassword)
app.post("/user/changePassword", changePassword)
app.delete("/user/delete", deleteUser)


app.post("/recipe", createRecipe)
app.post("/recipe/edit", editRecipe)
app.get("/recipe/:id", getRecipesById)
app.delete("/recipe/delete", deleteRecipe)

app.post("/user/follow", addFollow)

app.get("/user/feed", getFeed)