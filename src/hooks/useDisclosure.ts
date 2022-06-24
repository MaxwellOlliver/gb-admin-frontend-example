import {useState} from 'react';

function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    isOpen && setIsOpen(false);
  }

  function toggle() {
    setIsOpen((state) => !state);
  }

  return {isOpen, close, toggle};
}

export default useDisclosure;
