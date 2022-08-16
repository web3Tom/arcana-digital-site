import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as LOGO } from "../../assets/arcana-logo-final_dark-light-blue-min.svg";
import { ReactComponent as ALTLOGO } from "../../assets/arcana-logo-final_white.svg";
import NavLinks from "../../components/nav-links/nav-links.component";
import { device } from "../../components/global.component.styles";

import { mobileMenuVariant } from "../../components/mobile-navigation/mobile-nav-animation.components";

import { NavigationContext } from "../../contexts/navigation.context";

import {
  ulVariant,
  liVariant,
  MOBILE_LINKS,
} from "../../components/mobile-navigation/mobile-nav-animation.components";

import {
  NavStickyWrapper,
  NavigationContainer,
  NavLogoContainer,
  MobileIcon,
  MobileIconContainer,
  MobileMenu,
  MobileUl,
  MobileHomeLink,
  MobileNavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { visible } = useContext(NavigationContext);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const isMobileView = useMediaQuery({ query: device.tablet });

  return (
    <>
      <NavStickyWrapper visible={visible}>
        <NavigationContainer>
          <NavLogoContainer to="/">
            {visible ? <ALTLOGO /> : <LOGO />}
          </NavLogoContainer>
          {!isMobileView && <NavLinks />}
        </NavigationContainer>
        <MobileMenu
          initial="closed"
          animate={isMobileOpen ? "opened" : "closed"}
          variants={mobileMenuVariant}
        >
          <MobileUl variants={ulVariant}>
            <motion.li whileTap={{ scale: 0.95 }}>
              <motion.div
                variants={liVariant}
                onClick={() => setMobileOpen(!isMobileOpen)}
              >
                <MobileHomeLink to="/">Home</MobileHomeLink>
              </motion.div>
            </motion.li>
            {MOBILE_LINKS.map((navItem) => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div
                  variants={liVariant}
                  onClick={() => setMobileOpen(!isMobileOpen)}
                >
                  <MobileNavLink to={navItem.path}>
                    {navItem.navTitle}
                  </MobileNavLink>
                </motion.div>
              </motion.li>
            ))}
          </MobileUl>
        </MobileMenu>
        <MobileIconContainer
          visible={visible}
          onClick={() => setMobileOpen(!isMobileOpen)}
        >
          {isMobileView && (
            <MobileIcon
              toggled={isMobileOpen}
              toggle={setMobileOpen}
              color={visible ? `white` : `var(--color-primary)`}
              size={30}
              rounded
            />
          )}
        </MobileIconContainer>
      </NavStickyWrapper>
      <Outlet />
    </>
  );
};

export default Navigation;
