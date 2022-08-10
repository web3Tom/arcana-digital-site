import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteLink, ALink } from "../../components/global.component.styles";

export const NavStickyWrapper = styled.div.attrs((props) => ({
  topPos: props.topPos,
}))`
  position: fixed;
  background-color: white;
  margin: 0;
  padding: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  top: ${(props) => props.topPos};
  transition: top 0.6s ease-in-out;
`;

export const NavigationContainer = styled.div`
  display: flex;
  width: 80vw;
  margin: 0;
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

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;

  &:hover {
    cursor: pointer;
  }
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
