import { useContext } from "react";
import { SidebarContext } from "@/context/Sidebar";

interface IUseSidebar {
  toggle: () => void;
  closeSidebar: () => void;
  isOpen: boolean;
}

export default function useSidebar(): IUseSidebar {
  const { toggle, isOpen, closeSidebar } = useContext(SidebarContext);

  return { toggle, isOpen, closeSidebar };
}
