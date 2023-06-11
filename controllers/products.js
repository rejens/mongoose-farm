import Product from "../models/Product.js";

export async function getProducts(req, res) {
   try {
      const result = await Product.find({}).populate("category");
      res.json(result);
   } catch (error) {}
}

export async function postProducts(req, res) {
   try {
      const result = await Product.create(req.body);
      res.json(result);
   } catch (error) {
      res.json(error);
   }
}
