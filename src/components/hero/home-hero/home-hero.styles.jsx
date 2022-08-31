import styled from "styled-components";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BaseButton } from "../../button/button.styles";

import { device, GlobalH1, GlobalH2 } from "../../global.component.styles";
import { GradientButton } from "../../button/button.styles";

export const HomeHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  padding-top: 60px;
  background-color: transparent;
  z-index: 1;
`;

export const HomeHeroBGV = styled.video`
  height: 130vh;
  width: 100%;
  position: absolute;
  object-fit: cover;
  max-width: 100%;
  z-index: -1;
`;

export const HeroTitleContainer = styled.div`
  display: block;
  align-text: center;
  margin: 0 auto;
  padding: 0;
`;

export const HomeHeroH1 = styled(GlobalH1)`
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1em;
  padding-bottom: 30px;
  text-align: center;

  b {
    font-weight: inherit;
    font-style: italic;
    letter-spacing: 4px;
  }

  @media ${device.laptopL1366} {
    font-size: 48px;
  }
`;

export const HomeHeroH2 = styled(HomeHeroH1)`
  letter-spacing: 5px;

  b {
    font-style: normal;
    font-size: 1.4em;
    color: var(--color-primary);
  }

  @media ${device.laptopL1366} {
    font-size: 48px;
  }
`;

//Sub Text Animation
export const subcontaineranimation = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 100,
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.8,
    },
  },
};

export const subtextanimation = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

//Sub Text
export const HeroSubContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
`;

export const HeroSubTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;

export const HeroSubText = styled(GlobalH2)`
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;

  b {
    font-style: normal;
    color: var(--color-primary);
  }

  @media ${device.laptopL1366} {
    font-size: 16px;
  }
`;

export const HomeHeroSubArrow = styled(HiArrowNarrowRight)`
  margin: 0 10px;
  color: #ffffff;
`;

export const HomeHeroDesc = styled(motion.p)`
  font-family: inherit;
  font-size: 32px;
  text-align: center;
  color: #ffffff;
  line-height: 1.2em;
  margin: 0;

  @media ${device.laptopL1366} {
    font-size: 26px;
  }
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 38%;
  margin: 0 auto;
`;

export const HomeButton1 = styled(BaseButton)`
  width: 170px;
  height: 50px;
  font-size: 22px;
  font-weight: 600;
  margin: 0;

  @media ${device.laptopL1366} {
    height: 45px;
    width: 160px;
    font-size: 22px;
  }
`;

export const HomeGradientButton = styled(GradientButton)`
  width: 170px;
  height: 56px;
  margin: 0;

  &::after {
    content: "Sign-Up";
    font-size: 20px;
    font-weight: 600;
    width: 92%;
  }

  @media ${device.laptopL1366} {
    height: 45px;
    width: 160px;
    font-size: 18px;
  }
`;

export const ArrowContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 150px;
  margin: 0 auto;
  overflow: visible;

  &:hover {
    cursor: pointer;
  }
`;

export const SoftwareImg = styled(motion.img)`
  display: block;
  width: 70%;
  height: auto;
  margin: 0 auto;
`;
