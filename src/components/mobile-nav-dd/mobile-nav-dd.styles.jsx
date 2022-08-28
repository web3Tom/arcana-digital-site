import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { RiArrowDownSLine } from "react-icons/ri";

export const MobileLi = styled(motion.li)`
  overflow-y: hidden;
  user-select: none;
  margin: 10px 0;
`;

export const MobileFeaturesDropDown = styled.p`
  text-decoration: none;
  color: #ffffff;
  font-size: 26px;
  font-weight: 400;
  fontfamily: var(--body-font);
  margin: 0;
  padding: 0;
`;

export const MobileDDIcon = styled(RiArrowDownSLine)`
  vertical-align: middle;
`;

export const MobileDDLi = styled(motion.li)`
  overflow-y: hidden;
  user-select: none;
  margin: 20px 0;
`;

export const FeaturesDDMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  height: 200px;
  max-height: 300px;
  width: 250px;
`;

export const MobileDDUl = styled(motion.ul)`
  list-style: none;

  > li {

    > div {
      text-align: center;
      text-transform: capitalize;
    }

    &:hover {
      cursor: pointer;
    }
`;

export const MobileDDLink = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 400;
  fontfamily: var(--body-font);

  &.active {
    color: var(--color-primary);
  }
`;

// Motion Variants
export const MOBILE_DD_LINKS = [
  { id: 0, navTitle: "Messaging", path: "/messaging" },
  { id: 1, navTitle: "Reviews", path: "/reviews" },
  { id: 2, navTitle: "WebChat", path: "/webchat" },
  { id: 3, navTitle: "Payments", path: "/payments" },
];

export const liVariant = {
  opened: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.63,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export const MobileFeaturesDD = {
  opened: {
    height: "auto",
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.32, 0, 0.19, 0.45],
    },
  },
  closed: {
    height: "0px",
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.32, 0, 0.19, 0.45],
    },
  },
};

export const mobileUlVariant = {
  opened: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.12,
      staggerDirection: -1,
    },
  },
};

export const mobileLiVariant = {
  opened: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.32,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
};
