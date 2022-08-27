import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { device } from "../../components/global.component.styles";
import { motion } from "framer-motion";

export const NavStickyWrapper = styled.div.attrs(({ visible, ...props }) => (
  <div {...props} />
))`
  position: fixed;
  background-color: ${({ visible }) => (visible ? "white" : `transparent`)};
  margin: 0;
  padding: 0;
  left: 0;
  width: 100%;
  height: ${({ visible }) => (visible ? `60px` : `85px`)};
  display: flex;
  justify-content: center;
  z-index: 3;
  top: 0;
  transition: all 0.2s ease-in-out;
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 80vw;
  margin: 0;
  height: 100%;
  gap: 40px;
  align-items: center;

  @media ${device.laptop} {
    gap: 20px;
  }

  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

export const NavLogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  min-width: 140px;
  max-width: 200px;
  justify-content: center;
  padding-bottom: 5px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media ${device.laptop} {
    max-width: 170px;
  }
`;

export const MobileIcon = styled(Hamburger)``;

export const MobileIconContainer = styled.div.attrs(({ visible, ...props }) => (
  <div {...props} />
))`
  display: none;

  @media ${device.tablet} {
    display: flex;
    position: absolute;
    top: 0;
    right: 30px;
    height: ${({ visible }) => (visible ? `60px` : `85px`)};
    width: 60px;
    justify-content: center;
    align-items: center;
    transition: height 200ms;
  }
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 110vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-secondary);
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
