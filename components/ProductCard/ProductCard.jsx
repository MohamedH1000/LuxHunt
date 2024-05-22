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

const ProductCard = ({ result }) => {
  const { isConnected, address, signer } = useTheme();
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
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }
  return (
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
              Category: <span className="font-bold">{product.category}</span>
            </p>
            <p>
              Price: <span className="font-bold">{product.price}</span> ETH
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 w-full">
            <Button className="bg-black text-white w-full ">
              <Link href={`/shop/${product._id}`}>View Product Details</Link>
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
