import { useContext } from "react";
import { motion } from "framer-motion";
import { NavigationContext } from "../../contexts/navigation.context";
import { useMediaQuery } from "react-responsive";

import MobileNavDD from "../../components/mobile-nav-dd/mobile-nav-dd.component";

import {
  MobileIcon,
  MobileIconContainer,
  MobileMenu,
  MobileUl,
  MobileHomeLink,
  MobileNavLink,
  MobileLi,
  mobileMenuVariant,
  MOBILE_LINKS,
  liVariant,
  ulVariant,
} from "./mobile-nav-links.styles";

const MobileNavLinks = () => {
  const { scrolled, isMobileOpen, setMobileOpen } =
    useContext(NavigationContext);

  return (
    <>
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
        layout
        styles={{
          height: scrolled ? "60px" : "85px",
          top: scrolled ? "10px" : "15px",
        }}
        onClick={() => setMobileOpen(!isMobileOpen)}
      >
        <MobileIcon
          toggled={isMobileOpen}
          toggle={setMobileOpen}
          color={scrolled ? `var(--color-primary)` : `white`}
          size={30}
          rounded
        />
      </MobileIconContainer>
    </>
  );
};

export default MobileNavLinks;
