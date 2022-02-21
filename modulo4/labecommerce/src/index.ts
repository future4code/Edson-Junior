import { app } from "./app";
import { createProducts } from "./endpoints/createProducts";
import { createPurchases } from "./endpoints/createPurchases";
import { createUsers } from "./endpoints/createUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUserPurchases } from "./endpoints/getUsersPurchases";

app.post("/users", createUsers)
app.get("/users", getAllUsers)
app.post("/products", createProducts)
app.get("/products", getAllProducts)
app.post("/purchases", createPurchases)
app.get("/users/:userId/purchases", getAllUserPurchases)