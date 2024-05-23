"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Theme from "../NavBar/Theme";
import { ethers } from "ethers";
import { useTheme } from "@/context/ThemeProvider";

const Header = () => {
  const {
    address,
    setAddress,
    balance,
    setBalance,
    signer,
    setSigner,
    hasMetamask,
    setHasMetamask,
    isConnected,
    setIsConnected,
  } = useTheme();

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const sign = provider.getSigner();
        setSigner(sign);
        setAddress(await sign.getAddress());
        const hexBalance = parseInt((await sign.getBalance())._hex, 16);
        setBalance(hexBalance.toString().substring(0, 3));
        // console.log('here is the address', await sign.getAddress())
        // console.log("here is the balance", await sign.getBalance());
        // console.log("here is the sign", sign);
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsConnected(false);
    }
  }
  // async function execute() {
  //   if (typeof window.ethereum !== "undefined") {
  //     const contractAddress = address;
  //     const abi = [
  //       {
  //         inputs: [
  //           {
  //             internalType: "string",
  //             name: "_name",
  //             type: "string",
  //           },
  //           {
  //             internalType: "uint256",
  //             name: "_favoriteNumber",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "addPerson",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "string",
  //             name: "",
  //             type: "string",
  //           },
  //         ],
  //         name: "nameToFavoriteNumber",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "people",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "favoriteNumber",
  //             type: "uint256",
  //           },
  //           {
  //             internalType: "string",
  //             name: "name",
  //             type: "string",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [],
  //         name: "retrieve",
  //         outputs: [
  //           {
  //             internalType: "uint256",
  //             name: "",
  //             type: "uint256",
  //           },
  //         ],
  //         stateMutability: "view",
  //         type: "function",
  //       },
  //       {
  //         inputs: [
  //           {
  //             internalType: "uint256",
  //             name: "_favoriteNumber",
  //             type: "uint256",
  //           },
  //         ],
  //         name: "store",
  //         outputs: [],
  //         stateMutability: "nonpayable",
  //         type: "function",
  //       },
  //     ];
  //     const contract = new ethers.Contract(contractAddress, abi, signer);
  //     try {
  //       await contract.store(42);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     console.log("Please install MetaMask");
  //   }
  // }
  return (
    <nav className="flex justify-between  z-50 w-full gap-5 p-6  sm:px-12 dark:bg-black dark:text-white bg-white text-black font-bold">
      <Link href="/" className="flex items-center gap-1">
        <Image
          className="invert dark:invert-0"
          src="/assets/images/logo.png"
          width={70}
          height={50}
          alt="LuxHunt"
        />
      </Link>
      <div className="flex justify-center items-center gap-5">
        <Link href={"/shop"} className="text-md">
          Pieces
        </Link>
        <Link href={"/addtopieces"} className="text-md">
          Add to pieces
        </Link>
        {hasMetamask ? (
          isConnected ? (
            <button
              className="bg-[#e0c945] p-2 text-white rounded-md font-sans"
              onClick={() => connect()}
              disabled
            >
              {balance +
                " ETH " +
                address.slice(0, 5) +
                "..." +
                address.slice(-3)}
            </button>
          ) : (
            <button
              className="bg-[#e0c945] p-2 text-white rounded-md font-sans"
              onClick={() => connect()}
            >
              Connect to wallet
            </button>
          )
        ) : (
          <button
            className="bg-[#e0c945] p-2 text-white rounded-md font-sans"
            onClick={() => connect()}
          >
            Please install metamask
          </button>
        )}
        {/* {isConnected ? (
          <button
            className="bg-[#e0c945] p-2 text-white rounded-md font-sans"
            onClick={() => execute()}
          >
            Eexecute smart contract
          </button>
        ) : (
          ""
        )} */}
        <Theme />
      </div>
    </nav>
  );
};

export default Header;
