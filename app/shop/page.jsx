import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from "@/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/action/product.action";

const Pieces = async () => {
  const result = await getProducts();
  console.log(result);
  return (
    <>
      {products.length === 0 || products === "undefined" ? (
        <div className="min-h-[90vh] flex justify-center items-center gap-5 flex-col">
          <h1 className="text-3xl font-bold">No products to display</h1>
          <Button className={"bg-black text-white text-3xl p-4 h-[80px]"}>
            <Link href={"/addtopieces"}>try to add products</Link>
          </Button>
        </div>
      ) : (
        <div className="flex max-md:flex-col gap-5 xl:px-[100px] lg:px-[50px] py-[70px] max-md:px-[20px]">
          <div className="lg:w-[25%] border-r-[1px] border-gray-300 text-2xl font-bold max-md:border-none">
            Product Filters
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-bold">Products</h4>
            <div className="flex flex-wrap gap-3">
              {products.map((product, i) => (
                <Card className="p-2 w-[300px] relative" key={i}>
                  <CardHeader>
                    <img src={product?.image} alt="image" />
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="h-auto">
                    <p>Category: {product.category}</p>
                    <p>
                      Price: <span className="font-bold">{product.price}</span>$
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-black text-white w-[270px] absolute bottom-3 left-3">
                      <Link href={`/shop/${product.id}`}>
                        View Product Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pieces;
