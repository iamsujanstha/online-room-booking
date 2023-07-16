"use client";
import React, { FC } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import Avatar from "@/components/Navbar/components/Avatar";
import { useToggle } from "@/hooks/useToggle";
import MenuItems from "@/components/Navbar/components/Menu/MenuItems";
import useRegisterModal from "@/hooks/useRegisterModal";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  const [isOpen, toggle] = useToggle(false);
  const registerModal = useRegisterModal();

  return (
    <div className="relative flex flex-row items-center gap-3">
      <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
        Airbnb you home
      </div>
      <div
        onClick={toggle}
        className="py-2 px-2 md:py-1 md:px-2 xm:py-0 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
        <AiOutlineMenu size={16} />
        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>
      <div
        className="absolute top-16 right-0 w-44 bg-white shadow-lg rounded-md overflow-hidden cursor-pointer"
        style={{ display: isOpen ? "block" : "none" }}>
        <div className="">
          <MenuItems label="Login" handleClick={() => {}} />
          <MenuItems label="Sign up" handleClick={registerModal.onOpen} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
