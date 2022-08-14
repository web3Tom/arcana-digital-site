import styled from "styled-components";
import { RouteLink, ALink } from "../../components/global.component.styles";
import { device } from "../../components/global.component.styles";

export const NavLink = styled(RouteLink)``;
export const NavALink = styled(ALink)``;

export const NavLinksContainer = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;

  &:hover {
    cursor: pointer;
  }

  @media ${device.laptop} {
    gap: 20px;
  }
`;

export const NavAuthLinksContainer = styled.div`
  display: flex;
  height: 100%;
  width: 15%;
  align-self: flex-end;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;

  @media ${device.laptop} {
    gap: 15px;
  }
`;
