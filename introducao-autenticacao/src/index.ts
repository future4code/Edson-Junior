import { app } from "./app";
import { createUser } from "./endpoints/createUser";
import { getUserProfile } from "./endpoints/getUserByProfile";
import { login } from "./endpoints/login";


app.post("user/signup", createUser)
app.post("user/login", login)
app.get("user/profile", getUserProfile)
