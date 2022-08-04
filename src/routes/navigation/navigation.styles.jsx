import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteLink, ALink } from "../../components/global.component.styles";

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
