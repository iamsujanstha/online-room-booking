import React, { FC, useCallback, useState, useEffect, useRef } from "react";

import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

import Button from "@/components/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  actionLabel,
  body,
  title,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (showModal) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showModal]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <motion.div
        className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-one bg-neutral-800/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          ref={modalRef}
          className="relative w-full md:w-4/6 lg:w-3/6 sm:w-5/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto sm:h-auto bg-white-100 rounded-lg"
        >
          {/* {CONTENT} */}
          {/* {HEADER} */}
          <div className="flex items-start justify-center p-6 border-b-[1px] rounded-t">
            <button
              className="absolute p-1 border-0 left-9 transition hover:opacity-70"
              onClick={handleClose}
            >
              <IoMdClose size={16} />
            </button>
            <div className="text-lg font-semibold">{title}</div>
          </div>

          {/* BODY */}
          <div className="relative p-6 flex-auto">{body}</div>

          {/* FOOTER */}
          <div className="flex flex-col gap-2 p-6">
            <div className="flex flex-row items-center gap-4 w-full">
              {secondaryActionLabel && (
                <Button
                  label={secondaryActionLabel}
                  onClick={handleSecondaryAction}
                  outline
                />
              )}
              <Button label={actionLabel} onClick={handleSubmit} />
            </div>
            {footer}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
