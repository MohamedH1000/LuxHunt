"use client";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Button } from "@/components/ui/button";
import FileBase64 from "react-file-base64";
import { createProduct } from "@/lib/action/product.action";
import { useRouter, usePathname } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const page = () => {
  const router = useRouter();
  const { toast } = useToast();
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    location: "",
    certifications: "",
    warranty: "",
    returnDuration: "",
    selectedFile: "",
    path: pathname,
  });

  const clear = (e) => {
    e.preventDefault();
    setProductData({
      name: "",
      category: "",
      price: "",
      description: "",
      location: "",
      certifications: "",
      warranty: "",
      returnDuration: "",
      selectedFile: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createProduct(productData);
      router.push("/shop");
      toast({
        className:
          "font-bold text-[green] bg-white dark:bg-black dark:text-white",
        description: "Your Product is added successfully",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="p-20 min-h-[90vh] max-md:p-2 flex justify-center items-start">
      <div className=" w-[40%] max-md:w-[80%] ">
        <Paper elevation={3} className="px-2 py-4">
          <h1 className="text-center font-bold text-2xl mb-5">
            Add your piece
          </h1>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <TextField
              label="name"
              variant="outlined"
              className="w-[90%]"
              name="name"
              required
              value={productData.name}
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
            />
            <TextField
              label="category"
              required
              variant="outlined"
              className="w-[90%] "
              name="category"
              value={productData.category}
              onChange={(e) =>
                setProductData({ ...productData, category: e.target.value })
              }
            />
            <TextField
              label="price"
              required
              variant="outlined"
              className="w-[90%] "
              type="number"
              name="price"
              value={productData.price}
              onChange={(e) =>
                setProductData({ ...productData, price: e.target.value })
              }
            />
            <TextField
              name="description"
              required
              label="description"
              variant="outlined"
              className="w-[90%] "
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
            />
            <TextField
              name="location"
              required
              label="location"
              variant="outlined"
              className="w-[90%]"
              value={productData.location}
              onChange={(e) =>
                setProductData({ ...productData, location: e.target.value })
              }
            />
            <TextField
              name="certifications"
              label="certifications"
              type="file"
              focused
              variant="outlined"
              className="w-[90%] "
              value={productData.certifications}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  certifications: e.target.value,
                })
              }
            />
            <TextField
              name="warranty"
              label="warranty"
              variant="outlined"
              className="w-[90%] "
              value={productData.warranty}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  warranty: e.target.value,
                })
              }
            />
            <TextField
              name="returnDuration"
              label="return"
              variant="outlined"
              className="w-[90%] "
              value={productData.returnDuration}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  returnDuration: e.target.value,
                })
              }
            />
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setProductData({ ...productData, selectedFile: base64 })
              }
            />{" "}
            <Button
              type="submit"
              className="w-[90%] bg-[#0000FF] text-white"
              disabled={isSubmitting ? true : false}
            >
              {isSubmitting ? "Loading" : "Add Piece"}
            </Button>
            <Button
              className="w-[90%] mb-5 bg-[#FF0000] text-white"
              onClick={clear}
            >
              Clear
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default page;
