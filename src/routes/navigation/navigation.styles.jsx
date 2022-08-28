import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../components/global.component.styles";
import { motion } from "framer-motion";

export const NavStickyWrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  z-index: 3;
  transition: all 0.2s ease-in-out;
`;

export const NavigationContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  width: 80vw;
  height: 100%;
  margin: 0;

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
