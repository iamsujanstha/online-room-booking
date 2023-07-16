import { useState } from "react";

export const useToggle = (
  defaultValue?: boolean
): [boolean, () => void] => {
  const [isToggle, setIsOpen] = useState(!!defaultValue);

  const toggle = (): void => setIsOpen((x) => !x);

  return [isToggle, toggle];
};
