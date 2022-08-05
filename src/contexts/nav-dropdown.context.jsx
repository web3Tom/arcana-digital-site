import { createContext, useState } from "react";

export const NavContext = createContext({
  isDropDownOpen: false,
  setIsDropDownOpen: () => {},
});

export const NavContextProvider = ({ children }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const value = { isDropDownOpen, setIsDropDownOpen };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
