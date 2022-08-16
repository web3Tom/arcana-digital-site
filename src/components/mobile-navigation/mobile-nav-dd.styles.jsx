import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { RiArrowDownSLine } from "react-icons/ri";

export const MobileLi = styled(motion.li)`
  overflow-y: hidden;
  user-select: none;
  margin: 10px 0;
`;

export const MobileDDLi = styled(motion.li)`
  overflow-y: hidden;
  user-select: none;
  margin: 20px 0;
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
