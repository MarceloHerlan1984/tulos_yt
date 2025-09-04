"use client";
import { Button } from "@/components/ui/button";
import { Menu, Phone, MapPin, ListOrdered } from "lucide-react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";

import {
  ClerkLoaded,
  SignInButton,
  SignedIn,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import Link from "next/link";

function Header() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <header className=" border-b border-b-gry-400 py-5">
      <Container className="flex items-center justify-between gap-7">
        <HeaderMenu />
        <div className="w-auto md:w-1/2 items-center gap-3  flex">
          <MobileMenu />
          <Logo className="italic ">Amor del tango</Logo>
        </div>

        <div className="ml-auto flex items-center gap-5 justify-end">
          {" "}
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            {isSignedIn && (
              <Link href={"/cart"} className="group relative">
                <ListOrdered className="w-6 h-6 cursor-pointer" />
                <span className="absolute -top-1 -right-1 bg-black text-white h-3 w-3 rounded-full text-xs font-semibold flex items-center justify-center">
                  0
                </span>
              </Link>
            )}

            {isSignedIn ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal">
                <Button className="cursor-pointer" variant="ghost">
                  Login
                </Button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

export default Header;
