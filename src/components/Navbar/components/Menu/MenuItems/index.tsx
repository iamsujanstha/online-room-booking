import React, { FC } from "react";

interface MenuItemsProps {
  label: string;
  handleClick: () => void;
}

const MenuItems: FC<MenuItemsProps> = ({ label, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="px-4 py-2 hover:bg-neutral-100 transition font-semibold text-sm">
      {label}
    </div>
  );
};

export default MenuItems;
