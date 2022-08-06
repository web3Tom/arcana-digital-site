import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  RouteLink,
  ALink,
  PLink,
} from "../../components/global.component.styles";
import { keyframes } from "styled-components";
// import { useContext } from "react";
// const { isDropDownOpen, setIsDropDownOpen } = useContext(NavContext);
// const toggleIsDropDownOpen = () => setIsDropDownOpen(!isDropDownOpen);

export const NavigationContainer = styled.div`
  display: flex;
  width: 80vw;
  height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  gap: 40px;
  align-items: center;
`;

export const NavLogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  width: 15%;
  align-items: center;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const NavAuthLinksContainer = styled.div`
  display: flex;
  height: 100%;
  width: 15%;
  align-self: flex-end;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
`;

export const NavLink = styled(RouteLink)``;
export const NavALink = styled(ALink)``;
export const NavPLink = styled(PLink)``;

// Dropdown Menu links
export const NavDDLink = styled(NavLink)`
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
  left: -20px;
  z-index: 5;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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
`;
