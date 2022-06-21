import { createContext, PropsWithChildren } from "react";

export const MyContext = createContext({});

export default function MyContextProvider({ children }: PropsWithChildren) {
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
}
