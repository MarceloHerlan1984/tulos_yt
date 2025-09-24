"use client";
import Loading from "@/components/Loading";
import useCartStore from "@/store";
import React, { useState, useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import Container from "@/components/Container";
import NoAccess from "@/components/NoAccess";

function Cart() {
  const [isClient, setIsClient] = useState(false);
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useCartStore();

  const user = useUser();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    setIsClient(true);

    return () => {};
  }, []);

  if (!isClient) {
    return <Loading />;
  }

  return (
    <div>
      {!isSignedIn ? (
        <Container>{user?.user?.fullName}</Container>
      ) : (
        <NoAccess />
      )}
    </div>
  );
}

export default Cart;
