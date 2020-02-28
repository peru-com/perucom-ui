import { useState, useEffect } from 'react';

export const useToggle = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const locked = 'hidden';
  const unlocked = '';

  useEffect(() => {
    const contentBody = document.getElementsByTagName('body')[0];
    isOpen ? (contentBody.style.overflow = locked) : (contentBody.style.overflow = unlocked);
  }, [isOpen]);

  return {
    isOpen,
    onClick: () => setIsOpen(!isOpen)
  };
};