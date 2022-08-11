import styled from "styled-components";
import { PLink, RouteLink } from "../../components/global.component.styles";
import { keyframes } from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { device } from "../../components/global.component.styles";

export const NavPLink = styled(PLink)``;

export const DDIcon = styled(RiArrowDownSLine)`
  vertical-align: middle;
`;

// Dropdown Menu links
export const NavDDLink = styled(RouteLink)`
  &:hover {
    color: #ffffff;
    background-color: var(--color-primary);
  }
`;

//Dropdown content animation
const revealDD = keyframes`
  from {
    height: 0px;
  }

  to {
    height: 150px;
  }
`;

const revealDDxs = keyframes`
from {
  height: 0px;
}

to {
  height: 125px;
}
`;

// Hidden Wrapper for Dropdown Menu links
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  width: 185px;
  height: 0;
  overflow: hidden;
  transition: height 150ms ease-in-out;
  flex-direction: column;
  justify-content: flex-start;
  gap: 7px;
  padding: 0px 8px;
  top: 50px;
  left: 0;
  z-index: 2;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  @media ${device.laptop} {
    width: 135px;
    top: 38px;
  }
`;

// Wrapper encompassing ALink and Dropdown Content - trigger for displaying drop down bar
export const DropDownWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: flex;
    animation: ${revealDD} 500ms linear 1;
    animation-fill-mode: forwards;
  }

  @media ${device.laptop} {
    &:hover ${DropdownContent} {
      display: flex;
      animation: ${revealDDxs} 500ms linear 1;
      animation-fill-mode: forwards;
    }
  }
`;
