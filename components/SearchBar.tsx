"use client";

import { Loader, Search, SearchCheckIcon, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }
    setLoading(true);

    try {
      const query = `*[_type == "product"  && name match $search]`;
      const params = { search: `${search}*` };
      const response = await client.fetch(query, params);
      setProducts(response);
    } catch (error) {
      console.error("error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 400);

    return () => clearTimeout(debounceTimer);
  }, [search, fetchProducts]);

  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
        <Search className="w-5 h-5" />
      </DialogTrigger>
      <DialogContent className="min-w-full min-h-[80vh] max-h-[90vh]  flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="mb-1">Product Searchbar</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Search here..."
              className="flex-1 rounded-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <X
                className="w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect"
                onClick={() => setSearch("")}
              />
            )}
            <button
              type="submit"
              className={`absolute right-0 top-0 w-10 h-full flex items-center justify-center rounded-tr-md rounded-br-md hover:bg-darkColor hover:text-white hoverEffect ${search ? "bg-darkColor text-white" : "bg-darkColor/10"}`}
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </DialogHeader>
        <div className="w-full h-full overflow-y-scroll  border border-darkColor/20 rounded-md">
          <div className="text-center py-10 font-semibold tracking-wide">
            {loading && (
              <p className="flex items-center justify-center px-6 py-10 gap-1 text-center text-yellow-600 font-semibold">
                <Loader className="w-5 h-5 animate-spin" />
                Searching in progress...
              </p>
            )}
            {!loading &&
              products.length > 0 &&
              products.map((product: Product) => (
                <div key={product._id} className="bg-gray-300/10">
                  <div className="flex items-center p-1">
                    <Link
                      href={`/product/${product?.slug?.current}`}
                      className="h-50 w-50 flex-shrink-0"
                      onClick={() => setShowSearch(false)}
                    >
                      {product?.images && (
                        <Image
                          width={350}
                          height={200}
                          src={urlFor(product?.images[0]).url()}
                          alt="image"
                          className="object-contain w-full h-full "
                        />
                      )}
                    </Link>
                    <div className="flex-grow px-4 py-2">
                      <Link
                        href={`/product/${product?.slug?.current}`}
                        onClick={() => setShowSearch(false)}
                      >
                        <h3 className="text-sm md:text-lg font-semibold text-gray-800 line-clamp-1">
                          {product?.name}
                        </h3>
                        <p className="text-sm font-extralight p-3">
                          {product?.intro}
                        </p>
                      </Link>
                      <PriceView price={product.price} className="text-lg" />
                    </div>
                    <div className="w-60 mt-1">
                      <AddToCartButton product={product} />
                    </div>
                  </div>
                </div>
              ))}

            {!loading && products.length === 0 && search && <div>No match</div>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SearchBar;
