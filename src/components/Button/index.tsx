"use client";
import React, { FC } from "react";

import clsx from "clsx";
import { IconType } from "react-icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative disabled:opacity-70 flex justify-center items-center disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full",
        outline
          ? "bg-white border-black-100 text-black border-[2px]"
          : "bg-rose-500 border-rose-500 text-white-100",
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-[2px]"
      )}>
      {Icon && <span className="absolute left-4 ">{Icon}</span>}
      {label}
    </button>
  );
};

export default Button;
