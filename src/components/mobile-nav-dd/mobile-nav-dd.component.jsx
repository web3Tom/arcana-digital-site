import { useContext } from "react";
import { motion } from "framer-motion";

import { NavigationContext } from "../../contexts/navigation.context";

import {
  MobileDDIcon,
  FeaturesDDMenu,
  MobileLi,
  MobileFeaturesDropDown,
  MobileDDUl,
  MobileDDLi,
  MobileDDLink,
  MOBILE_DD_LINKS,
  liVariant,
  MobileFeaturesDD,
  mobileLiVariant,
  mobileUlVariant,
} from "./mobile-nav-dd.styles";

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
        <MobileDDUl variants={mobileUlVariant}>
          {MOBILE_DD_LINKS.map((mobileDDItem) => (
            <MobileDDLi whileTap={{ scale: 0.95 }} key={mobileDDItem.id}>
              <motion.div
                variants={mobileLiVariant}
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
