"use server";
import Product from "@/database/product.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function getProducts() {
  try {
    connectToDatabase();
    const productModel = await Product.find({});
    console.log(productModel);
  } catch (error) {
    console.log(error);
  }
}
export async function createProduct(params) {
  try {
    connectToDatabase();
    const {
      name,
      category,
      price,
      description,
      location,
      certifications,
      warranty,
      returnDuration,
      selectedFile,
      path,
    } = params;
    const newProduct = await Product.create({
      name,
      category,
      price,
      description,
      location,
      certifications,
      warranty,
      returnDuration,
      selectedFile,
    });
    await newProduct.save();
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(params) {
  try {
    connectToDatabase();

    const { productId } = params;

    await Product.deleteOne({ _id: productId });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
