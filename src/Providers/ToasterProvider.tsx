"use client";
import React, { FC } from "react";

import { Toaster } from "react-hot-toast";

interface ToasterProviderProps {}

const ToasterProvider: FC<ToasterProviderProps> = ({}) => {
  return (
    <div>
      <Toaster />
    </div>
  );
};

export default ToasterProvider;

/* Here the Toaster is client side NPM package and it needs to wrap under 'use client' so that it works smoothly in server component which needs to add <Toaster /> */
