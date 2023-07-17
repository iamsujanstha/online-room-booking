"use client";
import React, { FC } from "react";

import clsx from "clsx";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  id: string;
  errors: FieldErrors;
}

const TextField: FC<TextFieldProps> = ({
  label,
  formatPrice,
  register,
  errors,
  id,
  ...props
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && <BiDollar className="absolute left-4 top-4" />}
      <input
        className={clsx(
          "peer w-full p-4 pt-6 font-light bg-white-100 rounded-md transition outline-none disabled:opacity-70 disabled:cursor-not-allowd",
          formatPrice ? "pl-9" : "pl-4",
          errors[id]
            ? "border border-rose-500 focus:border-rose-500"
            : "border border-neutral-300 focus:border-black-100"
        )}
        id={id}
        disabled={props.disabled}
        {...register(id, { required:true })}
        {...props}
      />
      <label
        className={clsx(
          "absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0]",
          formatPrice ? "left-10" : "left-4",
          "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  peer-focus:-translate-y-4",
          errors[id] ? "text-rose-500" : "text-zinc-400"
        )}>
        {label}
      </label>
    </div>
  );
};

export default TextField;
