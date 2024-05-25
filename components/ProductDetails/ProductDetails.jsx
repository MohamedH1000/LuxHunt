"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/lib/action/product.action";
import { useToast } from "../ui/use-toast";
import { usePathname } from "next/navigation";
import { Container, Paper } from "@mui/material";
const ProductDetails = ({ product }) => {
  const path = usePathname();
  const { toast } = useToast();
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async (e) => {
    e.preventDefault();
    setIsDeleting(true);
    try {
      await deleteProduct({ productId: product._id, path: path });
      router.push("/shop");
      toast({
        className:
          "text-[red] font-bold bg-white dark:bg-black dark:text-white",
        title: "Product Removed Successfully",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <Container maxWidth="lg">
      <h1 className="font-bold text-3xl">{product?.name}</h1>
      <img
        src={product?.selectedFile}
        alt="image"
        className="w-[500px] h-[400px] mt-4 mb-3 rounded-md border-2"
      />
      <Paper className="flex flex-col gap-2 p-3 justify-start w-[500px] max-sm:w-[300px]">
        <p className="font-bold">
          Description : &nbsp;&nbsp;{product?.description}
        </p>
        <p className="font-bold">Category: &nbsp;&nbsp;{product?.category}</p>
        <p className="font-bold">Price: &nbsp;&nbsp;{product?.price} $</p>
        <p className="font-bold">Location: &nbsp;&nbsp;{product?.location}</p>
        <p className="font-bold">
          Certifications: &nbsp;&nbsp;{product?.certifications?.join(" ,")}
        </p>
        <p className="font-bold">Warranty: &nbsp;&nbsp;{product?.warranty}</p>
        <p className="font-bold">
          Return: &nbsp;&nbsp;{product?.returnDuration}
        </p>
        <Button
          className="bg-[red] text-white mt-3 justify-center"
          onClick={handleDelete}
          disabled={isDeleting ? true : false}
        >
          {isDeleting ? "Loading" : "Delete Product"}
        </Button>
      </Paper>
    </Container>
  );
};

export default ProductDetails;
