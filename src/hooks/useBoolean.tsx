import { useState } from "react";

export const useBoolean = (
  defaultValue?: boolean
): [boolean, () => void, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState(!!defaultValue);

  const setTrue = (): void => setIsOpen(true);
  const setFalse = (): void => setIsOpen(false);
  const toggle = (): void => setIsOpen((x) => !x);

  return [isOpen, setTrue, setFalse, toggle];
};
