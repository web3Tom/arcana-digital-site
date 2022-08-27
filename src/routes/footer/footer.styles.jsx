import styled from "styled-components";
import { GlobalH2 } from "../../components/global.component.styles";
import { Link } from "react-router-dom";
import { RouteLink } from "../../components/global.component.styles";

// framer motion objects

export const FooterStickyWrapper = styled.div`
  background: var(--color-secondary);
  display: block;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: flex-end;
  width: 80vw;
  margin: 10px auto;
`;
export const FooterCol = styled.div`
  display: flex;
  width: calc(20% - 10px);
  padding: 10px 0;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  color: #fff;
`;

export const FooterLogoContainer = styled(Link)`
  display: flex;
  height: fit-content;
  width: 80%;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const FooterSectionTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;

export const FooterLink = styled(RouteLink).attrs((animation1) => ({
  animation1,
}))`
  color: #fff;
  font-size: 12px;
`;
export const FooterTitle = styled(GlobalH2)``;
