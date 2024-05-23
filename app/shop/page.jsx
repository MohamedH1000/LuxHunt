import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "@/lib/action/product.action";
import { Toaster } from "@/components/ui/toaster";
import ProductCard from "@/components/ProductCard/ProductCard";
import Filters from "@/components/Filters/Filters";
const Pieces = async () => {
  const result = await getProducts({});
  const plainResult = JSON.parse(JSON.stringify(result));
  console.log("here is the result", result);

  return (
    <>
      {result?.length === 0 || result === "undefined" ? (
        <div className="min-h-[90vh] flex justify-center items-center gap-5 flex-col">
          <h1 className="text-3xl font-bold">No products to display</h1>
          <Button className={"bg-black text-white text-3xl p-4 h-[80px]"}>
            <Link href={"/addtopieces"}>try to add products</Link>
          </Button>
        </div>
      ) : (
        <div className="flex max-md:flex-col gap-5 xl:px-[100px] lg:px-[50px] py-[70px] max-md:px-[20px]">
          <Filters result={plainResult} />
          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-bold">Products</h4>
            <ProductCard result={plainResult} />
          </div>
          <Toaster />
        </div>
      )}
    </>
  );
};

export default Pieces;
