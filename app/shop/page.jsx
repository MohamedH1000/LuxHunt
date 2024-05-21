import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "@/lib/action/product.action";
import { Toaster } from "@/components/ui/toaster";

const Pieces = async () => {
  const result = await getProducts({});
  // console.log("here is the result", result);
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
          <div className="lg:w-[25%] border-r-[1px] border-gray-300 text-2xl font-bold max-md:border-none">
            Product Filters
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-bold">Products</h4>
            <div className="flex flex-wrap gap-3">
              {result?.map((product, i) => (
                <Card className="p-2 w-[300px] relative" key={i}>
                  <CardHeader>
                    <img
                      src={product?.selectedFile}
                      alt="image"
                      className="rounded-md"
                    />
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="h-auto">
                    <p>
                      Category:{" "}
                      <span className="font-bold">{product.category}</span>
                    </p>
                    <p>
                      Price: <span className="font-bold">{product.price}</span>{" "}
                      ETH
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2 w-full">
                    <Button className="bg-black text-white w-[270px] ">
                      <Link href={`/shop/${product.id}`}>
                        View Product Details
                      </Link>
                    </Button>
                    <Button className="bg-[blue] text-white w-[270px] ">
                      Buy Product
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <Toaster />
        </div>
      )}
    </>
  );
};

export default Pieces;
