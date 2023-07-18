'use client'
import React, { FC } from "react";

import Container from "@/components/Navbar/components/Container";
import Logo from "@/components/Navbar/components/Logo";
import Search from "@/components/Navbar/components/Search";
import Menu from "@/components/Navbar/components/Menu";

interface NavbarProps {
  currentUser: any;
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  console.log("hi", currentUser);
  return (
    <div className=" border border-b-2 bg-white shadow-sm w-full z-10">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo />
          <Search />
          <Menu />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
