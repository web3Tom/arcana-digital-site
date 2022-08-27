import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { motion } from "framer-motion";
import { ReactComponent as LOGO } from "../../assets/arcana-logo-final_dark-light-blue-min.svg";
import { ReactComponent as ALTLOGO } from "../../assets/arcana-logo-final_white.svg";
import NavLinks from "../../components/nav-links/nav-links.component";
import { device } from "../../components/global.component.styles";
import MobileNavDD from "../../components/mobile-navigation/mobile-nav-dd.component";

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
  MobileLi,
} from "./navigation.styles";

const Navigation = () => {
  const { visible, isMobileOpen, setMobileOpen } =
    useContext(NavigationContext);
  const isMobileView = useMediaQuery({ query: device.tablet });

  return (
    <>
      <NavStickyWrapper visible={visible}>
        <NavigationContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <NavLogoContainer to="/">
            {visible ? <LOGO /> : <ALTLOGO />}
          </NavLogoContainer>
          {!isMobileView && <NavLinks />}
        </NavigationContainer>
        <MobileMenu
          initial="closed"
          animate={isMobileOpen ? "opened" : "closed"}
          variants={mobileMenuVariant}
        >
          <MobileUl variants={ulVariant}>
            <MobileLi whileTap={{ scale: 0.95 }}>
              <motion.div
                variants={liVariant}
                onClick={() => setMobileOpen(!isMobileOpen)}
              >
                <MobileHomeLink to="/">Home</MobileHomeLink>
              </motion.div>
            </MobileLi>
            <MobileNavDD />
            {MOBILE_LINKS.map((navItem) => (
              <MobileLi whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div
                  variants={liVariant}
                  onClick={() => setMobileOpen(!isMobileOpen)}
                >
                  <MobileNavLink to={navItem.path}>
                    {navItem.navTitle}
                  </MobileNavLink>
                </motion.div>
              </MobileLi>
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
              color={visible ? `var(--color-primary)` : `white`}
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
