import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Sling as Hamburger } from "hamburger-react";

export const MobileMenu = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  height: 110vh;
  width: 100%;
  background-color: var(--color-secondary);
`;

export const MobileIcon = styled(Hamburger).attrs((props) => ({
  iconColor: props.iconColor,
}))`
  color: ${(props) => props.iconColor};
`;

export const MobileIconContainer = styled(motion.div)`
  display: flex;
  position: absolute;
  right: 40px;
  width: 60px;
  justify-content: center;
  align-items: center;
  transition: height 200ms;
`;

export const MobileUl = styled(motion.ul)`
  list-style: none;
  margin-top: 40px;
  padding: 0;

  > li {
    overflow-y: hidden;   
    user-select: none;
    
    > div {
      text-align: center;
      text-transform: capitalize;
    }

    &:hover {
      cursor: pointer;
    }
`;

export const MobileLi = styled(motion.li)`
  overflow-y: hidden;
  user-select: none;
  margin: 10px 0;
`;

export const MobileHomeLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 26px;
  font-weight: 400;
  fontfamily: var(--body-font);
`;

export const MobileNavLink = styled(MobileHomeLink)`
  &.active {
    color: var(--color-primary);
  }
`;

// Motion Variants

export const MOBILE_LINKS = [
  { id: 0, navTitle: "Pricing", path: "/pricing" },
  { id: 1, navTitle: "Demo", path: "/demo" },
  { id: 2, navTitle: "Why Arcana", path: "/why-arcana" },
  { id: 3, navTitle: "Log-in", path: "/log-in" },
  { id: 4, navTitle: "Sign-up", path: "/sign-up" },
];

export const mobileMenuVariant = {
  opened: {
    y: "0%",
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  closed: {
    y: "-100%",
    transition: {
      delay: 0.35,
      duration: 0.63,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

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

export const ulVariant = {
  opened: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.18,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};
