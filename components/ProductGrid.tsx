"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Title from "./Title";
import HomeTabbar from "./HomeTabbar";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";

const productType = [
  { title: "Course", value: "courses" },
  { title: "Festival", value: "event" },
  { title: "Milonga", value: "milonga" },
  { title: "Private Lessons", value: "private" },
];
function ProductGrid() {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.value || "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = `*[_type =='product' && variant ==$variant]`;

  const params = { variant: selectedTab.toLocaleLowerCase() };
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await client.fetch(query, params);
        setProducts(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTab]);

  return (
    <>
      <Container className="mt-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <Title className="uppercase text-3xl md:text-4xl font-bold text-center  text-black">
            Nuestras Clases
          </Title>
          <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px] ">
            Ofrecemos clases para todos los niveles, desde principiantes hasta
            avanzados. Cada clase está diseñada para brindarte la mejor
            experiencia de aprendizaje.
          </p>
        </div>
      </Container>
      <Container className="flex flex-col items-center ">
        <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 w-full">
            <motion.div className="flex items-center justify-center space-x-2">
              <Loader2 className="w-5 w-5 animate-spin"></Loader2>
              <span>LOADING...</span>
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full">
            {products?.map((product: Product, i) => (
              <AnimatePresence key={i}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

export default ProductGrid;
