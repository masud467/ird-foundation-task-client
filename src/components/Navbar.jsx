"use client";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  // const [isCartOpen, setCartOpen] = useState(false);
  // const [isClient, setIsClient] = useState(false);

  return (
    <>
      <header className={"sticky top-0 z-50 h-16 w-full border-border/40"}>
        <div className="container z-50 flex h-full items-center justify-between">
          <Link
            href={"/"}
            className="flex items-center gap-2 font-sans text-2xl font-bold"
          >
            <span className="font-serif text-xl font-semibold tracking-wide">
              Duas Page
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
