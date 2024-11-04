/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const Products = () => {
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);






  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setPro(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <header className="text-center text-2xl font-bold mb-4">Products</header>
      <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && pro.length === 0 && <p>No products found.</p>}
        {pro.map((product) => {
          const { id, title, description, price, image, rating } = product;
          return (
            <Card key={id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{title.slice(0, 30)}</CardTitle>
                <CardDescription>{product.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <Image
                  src={image}
                  alt={title}
                  width={500} 
                  height={200} 
                  className="w-full h-52 object-cover"
                />

                <p className="mt-2">Price: ${price}</p>
                <p>{description.slice(0, 100)} .......</p>
              </CardContent>
              <CardFooter>
                <p>
                  Rating: {rating.rate} ({rating.count} reviews)
                </p>
              </CardFooter>
            </Card>
          );
        })}
      </main>
    </div>
  );
};

export default Products;
