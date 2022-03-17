import { app } from "./app"
import { UserControler } from "./controller/userControler"

const userControler = new UserControler()

app.post("/signup", userControler.signUp)
app.post("/login", userControler.login)
app.get("/all", userControler.get)
app.delete("/:id", userControler.deleteUser)