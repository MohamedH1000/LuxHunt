"use server";
import Product from "@/database/product.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function getProducts() {
  try {
    connectToDatabase();
    const products = await Product.find({});
    // console.log("here is the products", products);
    return products;
  } catch (error) {
    console.log("errors", error);
  }
}
export async function getProductsById(params) {
  try {
    connectToDatabase();
    const { productId } = params;
    const product = await Product.findOne({ _id: productId }).lean();
    // console.log("here is the product", product);
    return product;
  } catch (error) {
    console.log("errors", error);
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
    await Product.create({
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
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(params) {
  try {
    connectToDatabase();

    const { productId, path } = params;

    await Product.findByIdAndDelete({ _id: productId });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
