import express from "express";
import { getProducts, postProducts } from "../controllers/products.js";

const Router = express.Router();

Router.route("/").get(getProducts).post(postProducts);

export default Router;
