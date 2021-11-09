import express from "express"
import cors from "cors"
import { productsRouter } from "./services/products.js";

const app = express();

app.use(cors())
app.use(express.json());

app.get('/test', (req, res) => {
    res.send({ message: 'Test success' })
})

app.use("/products", productsRouter)

export { app }