import { useContext } from "react";
import { motion } from "framer-motion";

import { NavigationContext } from "../../contexts/navigation.context";

import { MOBILE_DD_LINKS } from "../../components/mobile-navigation/mobile-nav-animation.components";

import {
  ulVariant,
  liVariant,
  MobileFeaturesDD,
} from "./mobile-nav-animation.components";

import {
  MobileDDIcon,
  FeaturesDDMenu,
  MobileDDUl,
  MobileDDLi,
  MobileDDLink,
} from "./mobile-nav-dd.styles";

import { MobileLi, MobileFeaturesDropDown } from "./mobile-nav-dd.styles";

const MobileNavDD = () => {
  const { isMobileOpen, setMobileOpen, isMobileDD, setMobileDD } =
    useContext(NavigationContext);

  return (
    <>
      <MobileLi whileTap={{ scale: 0.95 }}>
        <motion.div variants={liVariant}>
          <MobileFeaturesDropDown onClick={() => setMobileDD(!isMobileDD)}>
            Features
            <MobileDDIcon />
          </MobileFeaturesDropDown>
        </motion.div>
      </MobileLi>
      <FeaturesDDMenu
        animate={isMobileDD ? "opened" : "closed"}
        inital="closed"
        variants={MobileFeaturesDD}
      >
        <MobileDDUl variants={ulVariant}>
          {MOBILE_DD_LINKS.map((mobileDDItem) => (
            <MobileDDLi whileTap={{ scale: 0.95 }} key={mobileDDItem.id}>
              <motion.div
                variants={liVariant}
                onClick={() => setMobileOpen(!isMobileOpen)}
              >
                <MobileDDLink to={mobileDDItem.path}>
                  {mobileDDItem.navTitle}
                </MobileDDLink>
              </motion.div>
            </MobileDDLi>
          ))}
        </MobileDDUl>
      </FeaturesDDMenu>
    </>
  );
};

export default MobileNavDD;
