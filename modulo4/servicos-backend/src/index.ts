
import { app } from "./app";
import { createUser } from "./endpoints/postCreateUser";


app.post("/users", createUser)