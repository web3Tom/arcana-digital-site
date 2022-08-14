import { useState, useEffect, createContext } from "react";

import { debounce } from "../utils/helpers.utils";

//GLOBAL VALUES TO ACCESS
export const NavigationContext = createContext({
  visible: false,
  setVisible: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const value = { visible, setVisible };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos > 65);
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, handleScroll]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
