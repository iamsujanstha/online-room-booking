import React, { FC } from "react";

import Container from "@/components/Navbar/components/Container";
import Logo from "@/components/Navbar/components/Logo";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className=" border border-b-2 bg-white shadow-sm w-full">
      <div className="py-4">
        <Container>
          <Logo />
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
