"use client";
import { useTheme } from "@/context/ThemeProvider";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ethers } from "ethers";
import { useToast } from "../ui/use-toast";

const ProductCard = ({ result }) => {
  const { isConnected, address, signer, price, category, location } =
    useTheme();
  const { toast } = useToast();
  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = address;
      const abi = [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "_favoriteNumber",
              type: "uint256",
            },
          ],
          name: "addPerson",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          name: "nameToFavoriteNumber",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "people",
          outputs: [
            {
              internalType: "uint256",
              name: "favoriteNumber",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "retrieve",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_favoriteNumber",
              type: "uint256",
            },
          ],
          name: "store",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.store(42);
        toast({
          className:
            "dark:text-white dark:bg-black bg-white text-[green] font-bold",
          description: "Payment Succeeded",
        });
      } catch (error) {
        console.log(error);
        toast({
          className:
            "dark:text-white dark:bg-black bg-white text-[red] font-bold",
          description: "Payment Failed",
        });
      }
    } else {
      console.log("Please install MetaMask");
    }
  }
  const filteredResults = result?.filter((product) => {
    const matchesPrice = price ? product.price[0] === price : false;
    const matchesCategory = category ? product.category === category : false;
    const matchesLocation = location
      ? product.location[0].toString() === location
      : false;
    if (matchesPrice && matchesCategory && matchesLocation) {
      return matchesPrice && matchesCategory && matchesLocation;
    } else if (
      (matchesPrice && matchesCategory) ||
      (matchesCategory && matchesLocation) ||
      (matchesPrice && matchesLocation)
    ) {
      return (
        (matchesPrice && matchesCategory) ||
        (matchesCategory && matchesLocation) ||
        (matchesPrice && matchesLocation)
      );
    } else if (matchesPrice || matchesCategory || matchesLocation) {
      return matchesPrice || matchesCategory || matchesLocation;
    } else {
      return false;
    }
  });
  return (
    <div className="flex flex-wrap gap-3">
      {filteredResults.length > 0
        ? filteredResults?.map((product, i) => (
            <Card className="p-2 w-[300px] relative" key={i}>
              <CardHeader>
                <img
                  src={product?.selectedFile}
                  alt="image"
                  className="rounded-md"
                />
                <CardTitle className="">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="h-auto">
                <p>
                  Category:{" "}
                  <span className="font-bold">{product.category}</span>
                </p>
                <p>
                  Location:{" "}
                  <span className="font-bold">{product.location}</span>
                </p>
                <p>
                  Price: <span className="font-bold">{product.price}</span> ETH
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 w-full">
                <Button className="bg-black text-white w-full ">
                  <Link href={`/shop/${product._id}`}>
                    View Product Details
                  </Link>
                </Button>
                {isConnected ? (
                  <Button
                    className="bg-[blue]  text-white rounded-md w-full"
                    onClick={() => execute()}
                  >
                    Buy Product
                  </Button>
                ) : (
                  ""
                )}
              </CardFooter>
            </Card>
          ))
        : result?.map((product, i) => (
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
                  Location:{" "}
                  <span className="font-bold">{product.location}</span>
                </p>
                <p>
                  Price: <span className="font-bold">{product.price}</span> $
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 w-full">
                <Button className="dark:bg-black dark:text-white w-full text-black bg-white border-[2px] border-[gray] dark:border-none">
                  <Link href={`/shop/${product._id}`}>
                    View Product Details
                  </Link>
                </Button>
                {isConnected ? (
                  <Button
                    className="bg-[blue]  text-white rounded-md w-full"
                    onClick={() => execute()}
                  >
                    Buy Product
                  </Button>
                ) : (
                  ""
                )}
              </CardFooter>
            </Card>
          ))}
    </div>
  );
};

export default ProductCard;
