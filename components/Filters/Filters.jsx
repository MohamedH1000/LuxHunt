"use client";
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@/context/ThemeProvider";

const Filters = ({ result }) => {
  const { price, setPrice, location, setLocation, category, setCategory } =
    useTheme();
  // console.log("price", price);
  // console.log("location", location);
  // console.log("category", category);
  const categoriesArray = result?.map((category) => {
    return category.category;
  });
  const locationArray = result?.map((location) => {
    return location.location;
  });
  const priceArray = result?.map((price) => {
    return price.price;
  });
  //   console.log("categoriesArray", categoriesArray);
  //   console.log("locationArray", locationArray);
  //   console.log("priceArray", priceArray);
  const uniqueCategories = [...new Set(categoriesArray)];
  const uniqueLocations = [...new Set(locationArray.flat())];
  const uniquePrice = [...new Set(priceArray.flat())];
  //   console.log("uniqueCategories", uniqueCategories);
  //   console.log("uniqueLocations", uniqueLocations);
  //   console.log("uniquePrice", uniquePrice);
  const handleCategoryChange = (event, nextView1) => {
    setCategory(nextView1);
  };
  const handlePriceChange = (event, nextView2) => {
    setPrice(nextView2);
  };
  const handleLocationChange = (event, nextView3) => {
    setLocation(nextView3);
  };

  return (
    <div className="lg:w-[25%] border-r-[1px] border-gray-300 text-2xl font-bold max-md:border-none">
      <h1 className="mb-5 text-3xl">Product Filters</h1>
      <div className="flex flex-col">
        <div className="flex flex-col gap-5 mr-5">
          <h1>Category</h1>
          <ToggleButtonGroup
            orientation="vertical"
            value={category}
            exclusive
            onChange={handleCategoryChange}
          >
            {uniqueCategories ? (
              uniqueCategories.map((category) => (
                <ToggleButton
                  value={category}
                  key={category}
                  className="font-bold text-black normal-case"
                >
                  {category}
                </ToggleButton>
              ))
            ) : (
              <p>No categories to filter</p>
            )}
          </ToggleButtonGroup>
        </div>
        <div className="flex flex-col gap-5 mr-5 mt-5">
          <h1>Location</h1>
          <ToggleButtonGroup
            orientation="vertical"
            value={location}
            exclusive
            onChange={handleLocationChange}
          >
            {uniqueLocations ? (
              uniqueLocations.map((location) => (
                <ToggleButton
                  value={location}
                  key={location}
                  className="font-bold text-black normal-case"
                >
                  {location}
                </ToggleButton>
              ))
            ) : (
              <p className="font-bold">No locations to filter</p>
            )}
          </ToggleButtonGroup>
        </div>
        <div className="flex flex-col gap-5 mr-5 mt-5">
          <h1>Price</h1>
          <ToggleButtonGroup
            orientation="vertical"
            value={price}
            exclusive
            onChange={handlePriceChange}
          >
            {uniquePrice ? (
              uniquePrice.map((price) => (
                <ToggleButton
                  value={price}
                  key={price}
                  className="font-bold text-black normal-case "
                >
                  {price}
                </ToggleButton>
              ))
            ) : (
              <p>No Price to filter</p>
            )}
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Filters;
