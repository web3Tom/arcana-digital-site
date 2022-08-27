import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  GlobalContentContainer,
  GlobalH1,
  GlobalH2,
} from "../../global.component.styles";

export const HomeHeroContentWrapper = styled(GlobalContentContainer)``;

export const HomeHeroContainer = styled.div`
  display: block;
  text-align: center;
  padding-top: 80px;
  background-color: transparent;
  z-index: 1;
`;

export const HomeHeroH1 = styled(GlobalH1)`
  z-index: 1;

  b {
    font-weight: inherit;
    font-style: italic;
  }
`;

export const HomeHeroBGV = styled.video`
  height: 100vh;
  width: 100vw;
  position: absolute;
  object-fit: cover;
  z-index: -1;
`;

export const HeroSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 10px;
  width: 1000px;
  padding: 5px;
  margin: 5px auto;
`;

export const HeroSubText = styled(GlobalH2)``;
export const HomeHeroSubArrow = styled(HiArrowNarrowRight)`
  vertical-align: middle;
  color: var(--color-primary);
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  margin: 30px auto 0 auto;
`;
