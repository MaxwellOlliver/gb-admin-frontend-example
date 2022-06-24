import {createContext, useEffect, useState} from 'react';
import useResize from '@/hooks/useResize';

export const SidebarContext = createContext({
  isOpen: false,
  toggle: () => console.warn('sidebar context not provided'),
  closeSidebar: () => console.warn('sidebar context not provided'),
});

export function SidebarProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const {width} = useResize();

  useEffect(() => {
    if (width > 1199 && isOpen) {
      setIsOpen(false);
    }
  }, [width]);

  const toggle = () => setIsOpen((state) => !state);

  const closeSidebar = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{isOpen, toggle, closeSidebar}}>
      {children}
    </SidebarContext.Provider>
  );
}
