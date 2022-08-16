import { useState, useEffect, createContext } from "react";

import { debounce } from "../utils/helpers.utils";

//GLOBAL VALUES TO ACCESS
export const NavigationContext = createContext({
  visible: false,
  setVisible: () => {},
  isMobileOpen: false,
  setMobileOpen: () => {},
  isMobileDD: false,
  setMobileDD: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isMobileDD, setMobileDD] = useState(false);
  const value = {
    visible,
    setVisible,
    isMobileOpen,
    setMobileOpen,
    isMobileDD,
    setMobileDD,
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos > 65);
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, handleScroll]);

  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileOpen]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
