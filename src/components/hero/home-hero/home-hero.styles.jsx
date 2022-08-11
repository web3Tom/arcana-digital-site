import styled from "styled-components";
import {
  GlobalH1,
  GlobalH2,
  HeroContentWrapper,
} from "../../global.component.styles";
import HomeBGI from "../../../assets/hero-images/home-bg.png";

export const HomeHeroContainer = styled.div.attrs((props) => ({
  bgImg: props.bgImg || `${HomeBGI}`,
  alt: "hero-background",
}))`
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  display: block;
  padding-left: 12%;
`;

export const HomeHeroContentWrapper = styled(HeroContentWrapper)``;

export const HomeTitle = styled(GlobalH1).attrs((props) => ({
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  transition: { type: "tween", duration: 2 },
}))`
  width: auto;
  margin: 100px 0 0 0;
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
