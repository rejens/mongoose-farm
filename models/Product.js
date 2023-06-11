import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   tags: {
      type: [String],
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
   image: {
      featured: {
         type: String,
         required: true,
      },
      gallery: {
         type: [String],
         required: true,
      },
   },
   category: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
   },
});

const Product = model("products", ProductSchema);
export default Product;
