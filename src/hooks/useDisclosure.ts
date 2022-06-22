import { useState } from "react";

type UseDisclosureProps = {
  initAsTrue?: boolean;
};

function useDisclosure({ initAsTrue }: UseDisclosureProps) {
  const [isOpen, setIsOpen] = useState(!!initAsTrue);

  function close() {
    isOpen && setIsOpen(false);
  }

  function toggle() {
    setIsOpen((state) => !state);
  }

  return { isOpen, close, toggle };
}

export default useDisclosure;
