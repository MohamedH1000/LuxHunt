"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/lib/action/product.action";
import { useToast } from "../ui/use-toast";

const ProductDetails = ({ product }) => {
  const toast = useToast();
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async (e) => {
    e.preventDefault();
    setIsDeleting(true);
    try {
      await deleteProduct({ productId: product._id });
      router.push("/shop");
      toast({
        className: "text-[green]",
        title: "Product Removed Successfully",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">{product?.name}</h1>
      <img
        src={product?.image}
        alt="image"
        className="w-[500px] h-[400px] mt-4 mb-3 rounded-md"
      />
      <p>Description : {product?.description}</p>
      <p>Category: {product?.category}</p>
      <p>Price: {product?.price} ETH</p>
      <p>Location: {product?.location}</p>
      <p>Certifications: {product?.certifications?.join(" ,")}</p>
      <p>Warranty: {product?.warranty}</p>
      <p>Return: {product?.return}</p>
      <Button
        className="bg-[red] text-white mt-3 "
        onClick={handleDelete}
        disabled={isDeleting ? true : false}
      >
        {isDeleting ? "Loading" : "Delete Product"}
      </Button>
    </div>
  );
};

export default ProductDetails;
