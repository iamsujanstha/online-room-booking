"use client";

import React, { FC, useCallback, useState } from "react";

// import { AiFillGihub } from "react-icons/ai";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modal";
import Heading from "@/components/Heading";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

interface LoginModalProps {}

const LoginModal: FC<LoginModalProps> = ({}) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    //   try {
    //     const response = await signIn("credentials", {
    //       ...data,
    //       retdirect: false,
    //     });
    //     loginModal.onClose();
    //     if (response?.ok) {
    //       toast.success("Login successfully");
    //     }
    //     setIsLoading(false);
    //     if (!response?.ok) toast.error(response?.error as string);
    //   } catch (error) {
    //     toast.error("Something went wrong");
    //   }
    // };
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in successfully!");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account" />
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
          Do not have an account?
          <span
            onClick={() => {}}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            ">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
