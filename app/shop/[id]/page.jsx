import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { getProductsById } from "@/lib/action/product.action";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const product = await getProductsById({ productId: id });
  console.log("Here is the product", product);

  const plainProduct = JSON?.parse(JSON?.stringify(product));

  return (
    <div className="min-h-[90vh] px-[150px] py-[50px]">
      <ProductDetails product={plainProduct} />
    </div>
  );
};

export default page;
