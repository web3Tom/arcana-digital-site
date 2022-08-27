import styled from "styled-components";
import { PLink, RouteLink } from "../../components/global.component.styles";
import { keyframes } from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { device } from "../../components/global.component.styles";

export const NavPLink = styled(PLink)``;

export const DDIcon = styled(RiArrowDownSLine).attrs((visible, ...props) => ({
  color:
    props.color ||
    (({ visible }) => (visible ? "black" : `var(--color-primary)`)),
}))`
  vertical-align: middle;
  color: ${(props) => props.color};
`;

// Dropdown Menu links
export const NavDDLink = styled(RouteLink)`
  padding: 3px 0 3px 0;
  text-indent: 5px;
  color: var(--color-secondary);

  &:hover {
    color: white;
    background-color: var(--color-primary);
  }
`;

//Dropdown content animation
const revealDD = keyframes`
  from {
    height: 0px;
  }

  to {
    height: 146px;
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
  padding: 0;
  margin: 0;
  top: 50px;
  left: 0;
  transition: height 150ms ease-in-out;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  z-index: 2;
  background-color: white;
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
    animation: ${revealDD} 400ms linear 1;
    animation-fill-mode: forwards;
  }

  @media ${device.laptop} {
    &:hover ${DropdownContent} {
      display: flex;
      animation: ${revealDDxs} 400ms linear 1;
      animation-fill-mode: forwards;
    }
  }
`;
