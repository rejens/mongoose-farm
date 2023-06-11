import express from "express";
import mongoose from "mongoose";
import database from "./utils/database.js";
import Product from "./models/Product.js";

import productRoutes from "./routes/products.js";

const app = express();

app.use(express.json());

database();

app.use("/api/products", productRoutes);

app.listen(5000, () => {
   console.log("Server running on port 5000");
});
