import React from "react";
import { products } from "../../../constants";
import Image from "next/image";

const page = ({ params }) => {
  const { id } = params;
  const productId = parseInt(id, 10); // Convert id to a number
  const product = products.find((product) => product.id === productId);
  return (
    <div className="min-h-[90vh] px-[150px] py-[50px]">
      <h1 className="font-bold text-3xl">{product?.name}</h1>
      <img
        src={product?.image}
        alt="image"
        className="w-[500px] h-[400px] mt-4 mb-3 rounded-md"
      />
      <p>Description : {product?.description}</p>
      <p>Category: {product?.category}</p>
      <p>Price: {product?.price} $</p>
      <p>Location: {product?.location}</p>
      <p>Certifications: {product?.certifications.join(" ,")}</p>
      <p>Warranty: {product?.rulesForWarrantyAndReturn?.warranty}</p>
      <p>Return: {product?.rulesForWarrantyAndReturn?.warranty}</p>
    </div>
  );
};

export default page;
