import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { ReactComponent as LOGO } from "../../assets/arcana-logo-final_dark-light-blue-min.svg";
import { ReactComponent as ALTLOGO } from "../../assets/arcana-logo-final_white.svg";

import NavLinks from "../../components/nav-links/nav-links.component";
import MobileNavLinks from "../../components/mobile-nav-links/mobile-nav-links.component";

import { NavigationContext } from "../../contexts/navigation.context";

import {
  NavStickyWrapper,
  NavigationContainer,
  NavLogoContainer,
} from "./navigation.styles";
import { device } from "../../components/global.component.styles";

const Navigation = () => {
  const { scrolled } = useContext(NavigationContext);
  const isMobileView = useMediaQuery({ query: device.laptopL });

  return (
    <>
      <NavStickyWrapper
        layout
        style={{
          height: scrolled ? "60px" : "85px",
          background: scrolled ? "white" : "transparent",
        }}
      >
        <NavigationContainer
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <NavLogoContainer to="/">
            {scrolled ? <LOGO /> : <ALTLOGO />}
          </NavLogoContainer>
          {isMobileView ? <MobileNavLinks /> : <NavLinks />}
        </NavigationContainer>
      </NavStickyWrapper>
      <Outlet />
    </>
  );
};

export default Navigation;
