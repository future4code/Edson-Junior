import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import { getUserProfile } from "./endpoints/getUserProfile"
import { login } from "./endpoints/login"
import { ex1 } from "./ex1/ex1"

console.log(ex1())

app.post("/users/signup", createUser)
app.post("/users/login", login)
app.post("/users/profile", getUserProfile)