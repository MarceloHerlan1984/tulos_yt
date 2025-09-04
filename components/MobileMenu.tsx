"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
        }}
      >
        <AlignLeft className="hover:text-black md:hidden hoverEffect cursor-pointer"></AlignLeft>
      </button>
      <div className="md:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => {
            setIsSidebarOpen(false);
          }}
        />
      </div>
    </>
  );
}

export default MobileMenu;
