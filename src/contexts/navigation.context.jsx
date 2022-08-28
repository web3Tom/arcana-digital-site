import { useState, useEffect, createContext } from "react";

import { debounce } from "../utils/helpers.utils";

//GLOBAL VALUES TO ACCESS
export const NavigationContext = createContext({
  scrolled: false,
  setScrolled: () => {},
  isMobileOpen: false,
  setMobileOpen: () => {},
  isMobileDD: false,
  setMobileDD: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isMobileDD, setMobileDD] = useState(false);
  const value = {
    scrolled,
    setScrolled,
    isMobileOpen,
    setMobileOpen,
    isMobileDD,
    setMobileDD,
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setScrolled(currentScrollPos > 65);
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, handleScroll]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      console.log("mobile is open");
    } else {
      document.body.style.overflow = "unset";
      console.log("mobile is closed");
    }
  }, [isMobileOpen]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
