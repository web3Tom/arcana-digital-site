import styled from "styled-components";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  GlobalContentContainer,
  GlobalH1,
  GlobalH2,
} from "../../global.component.styles";
import { GradientButton } from "../../button/button.styles";
import { device } from "../../global.component.styles";

export const HomeHeroContentWrapper = styled(GlobalContentContainer)`
  height: 100%;
`;

export const HomeHeroContainer = styled.div`
  display: block;
  text-align: center;
  padding-top: 80px;
  background-color: transparent;
  z-index: 1;
`;

export const HomeHeroH1 = styled(GlobalH1)`
  font-size: 82px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;

  b {
    font-weight: inherit;
    font-style: italic;
    letter-spacing: 5px;
  }
  @media ${device.laptop} {
    font-size: 48px;
  }
`;

export const HomeHeroH2 = styled(HomeHeroH1)`
  letter-spacing: 5px;
  b {
    font-style: normal;
    color: var(--color-primary);
  }
  @media ${device.laptop} {
    font-size: 48px;
  }
`;

export const HomeHeroBGV = styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  max-width: 100%;
  z-index: -1;
`;

export const HeroSubContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
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

export const HomeGradientButton = styled(GradientButton)`
&::after {
  content: "Sign-Up";
  font-size: 18px;
  width: 90%;
  `;
