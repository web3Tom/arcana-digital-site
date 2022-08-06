import styled from "styled-components";
import { GlobalH1, GlobalH2 } from "../../components/global.component.styles";
import { HomeHeroContainer } from "../../components/hero/hero.styles";

export const HomeHero = styled(HomeHeroContainer)`
  padding-left: 150px;
`;

export const HomeTitle = styled(GlobalH1).attrs((props) => ({
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  transition: { type: "tween", duration: 2 },
}))`
  width: auto;
  margin: 50px 0 0 0;
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 20px;
  min-height: max-content;
  width: max-content;
`;

export const ServiceTitle = styled(GlobalH2)`
  margin: 0;
  text-align: left;
`;
