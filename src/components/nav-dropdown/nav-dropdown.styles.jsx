import styled from "styled-components";
import { RouteLink } from "../global.component.styles";

export const NavDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  padding: 20px;
  top: 80px;
  left: 500px;
  z-index: 5;
`;

export const NavDropDownLink = styled(RouteLink)``;
