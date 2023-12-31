"use client";

import React, { FC, useCallback, useState } from "react";

// import { AiFillGihub } from "react-icons/ai";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import axios from "axios";

import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "@/components/Modal";
import Heading from "@/components/Heading";
import TextField from "@/components/TextField";
import Button from "@/components/Button";

interface RegisterModalProps {}

const RegisterModal: FC<RegisterModalProps> = ({}) => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("/api/register", data);
      toast.success("Account created successfully!");
      registerModal.onClose();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <TextField
        id="email"
        label="Email"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextField
        id="name"
        label="Name"
        type="name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={<FcGoogle />}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={<AiFillGithub />}
        onClick={() => {}}
      />
      <div
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        ">
        <p>
          Already have an account?
          <span
            onClick={() => {}}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            ">
            Log in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
