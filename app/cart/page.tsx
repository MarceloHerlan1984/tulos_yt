"use client";
import Loading from "@/components/Loading";
import useCartStore from "@/store";
import React, { useState, useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import Container from "@/components/Container";
import NoAccess from "@/components/NoAccess";
import EmptyCart from "@/components/EmptyCart";
import { Heart, ShoppingBagIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import toast from "react-hot-toast";
import PriceFormatter from "@/components/PriceFormatter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  createCheckoutSession,
  Metadata,
} from "@/actions/createCheckuotSession";

function Cart() {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
    getGroupedItems,
  } = useCartStore();

  const { user } = useUser();
  const { isSignedIn } = useAuth();
  const cartProducts = getGroupedItems();
  console.log(cartProducts);

  useEffect(() => {
    setIsClient(true);

    return () => {};
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success(`Product deleted`);
  };

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to empty the cart?");

    if (confirmed) {
      resetCart();
      toast.success("the cart is empty");
    }
  };

  const handleCheckOut = async () => {
    setLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "unknown",
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? "unknown",
        clerkUserId: user!.id,
      };

      const checkoutUrl = await createCheckoutSession(cartProducts, metadata);

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.log("error in check out", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 pb-52 md:pb-10 ">
      {isSignedIn ? (
        <Container>
          {cartProducts?.length ? (
            <>
              <div className="flex items-center gap-2 py-5 ">
                {" "}
                <ShoppingBagIcon />
                <h1 className="text-2xl font-semibold">Shopping Cart</h1>
              </div>
              <div className="grid lg:grid-cols-3 md:gap-8">
                <div className="lg:col-span-2 rounded-lg">
                  <div className="border bg-white rounded-md">
                    {cartProducts?.map((item, i) => {
                      const itemCount = getItemCount(item.product?._id);
                      return (
                        <>
                          <div
                            key={i}
                            className="border-b p-2.5 last:border-b-0 flex items-center justify-between gap-5"
                          >
                            <div className="flex-col md:flex-row justify-around gap-4 p-3">
                              {item.product?.images && (
                                <>
                                  <Link
                                    href={`/product/${item.product?.slug?.current}`}
                                  >
                                    <Image
                                      src={urlFor(item.product.images[0]).url()}
                                      alt="foto"
                                      width={350}
                                      height={350}
                                      loading="lazy"
                                    />
                                  </Link>
                                  <div>
                                    <h2 className="font-semibold line-clamp-1 uppercase">
                                      {item.product.name}
                                    </h2>
                                    <div className="text-sm capitalize">
                                      {item.product.intro}
                                    </div>
                                  </div>
                                  <div className="flex gap-2 p-2">
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger>
                                          <TooltipTrigger>
                                            <Heart className="md:w-6 md:h-6 hover:text-red-600" />
                                          </TooltipTrigger>
                                          <TooltipContent className="font-bold">
                                            Add to Favorite
                                          </TooltipContent>
                                        </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                        <TooltipTrigger>
                                          <TooltipTrigger>
                                            <Trash2Icon
                                              onClick={() =>
                                                handleDeleteProduct(
                                                  item.product?._id
                                                )
                                              }
                                              className="md:w-6 md:h-6 hover:text-red-600"
                                            />
                                          </TooltipTrigger>
                                          <TooltipContent className="font-bold">
                                            Remove
                                          </TooltipContent>
                                        </TooltipTrigger>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </div>
                                </>
                              )}
                            </div>
                            <div className="flex flex-col items-start justify-between">
                              <PriceFormatter
                                className="font-bold text-2xl"
                                amount={
                                  (item.product?.price as number) * itemCount
                                }
                              />
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <Button
                      className="m-5 font-semibold"
                      variant="destructive"
                      onClick={handleResetCart}
                    >
                      Reset Cart
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border">
                    <h2 className="font-semibold text-2xl">Order Summary</h2>

                    <div className="space-y-5">
                      <div className="flex justify-between">
                        <span>Total Price</span>
                        <PriceFormatter amount={getSubTotalPrice()} />
                      </div>
                      <Separator />
                      <div>
                        <Button
                          className="w-full rounded-full font-semibold tracking-wide"
                          onClick={handleCheckOut}
                        >
                          Proceed to Checkout
                        </Button>
                        <Link
                          href="/"
                          className="flex items-center mt-4 border border-darkColor/50 justify-center rounded-full hover:border-darkColor hover:bg-darkColor/1"
                        >
                          <Image
                            src="/R.jpg" // Note: no './' and no 'public' folder in the path
                            alt="papallogo"
                            width={60}
                            height={50}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*order summary for mobile*/}
                <div className="md:hidden fixed bottom-0 left-0 w-full bg-white pt-2">
                  <div className="p-4 rounded-lg border mx-4">
                    <div className="space-y-5">
                      <div className="flex justify-between">
                        <span>Total Price</span>
                        <PriceFormatter amount={getSubTotalPrice()} />
                      </div>
                      <Separator />
                      <div>
                        <Button
                          onClick={handleCheckOut}
                          className="w-full rounded-full font-semibold tracking-wide"
                        >
                          Proceed to Checkout
                        </Button>
                        <Link
                          href="/"
                          className="flex items-center mt-4 border border-darkColor/50 justify-center rounded-full hover:border-darkColor hover:bg-darkColor/1"
                        >
                          <Image
                            src="/R.jpg" // Note: no './' and no 'public' folder in the path
                            alt="papallogo"
                            width={60}
                            height={50}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccess />
      )}
    </div>
  );
}

export default Cart;
