import { Schema, models, model } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: [{ type: Number, required: true }],
  description: { type: String, required: true },
  location: [{ type: String, required: true }],
  certifications: [{ type: String }],
  warranty: { type: String },
  return: { type: String },
  selectedFile: [{ type: String }],
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
