import { motion } from "framer-motion";

import HomeHeroMov from "../../../assets/hero-images/videos/home-hero-mp4.mov";
import Button, { BUTTON_TYPE_CLASS } from "../../button/button.component";

import {
  HomeHeroContainer,
  HomeHeroContentWrapper,
  HomeHeroH1,
  HomeHeroBGV,
  HeroSubContainer,
  HeroSubText,
  HomeHeroSubArrow,
  HomeButtonContainer,
} from "./home-hero.styles";

const HomeHero = () => {
  return (
    <>
      <HomeHeroContentWrapper>
        <HomeHeroContainer>
          <HomeHeroH1
            as={motion.h1}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            fontFamily="var(--font-primary)"
            weight="400"
            size="60px"
            color="#ffffff"
          >
            Goodbye <b>Complicated</b> CRMs
          </HomeHeroH1>
          <HomeHeroH1
            as={motion.h1}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            fontFamily="var(--font-primary)"
            weight="600"
            size="92px"
            spacing="5px"
            color="#ffffff"
          >
            Hello ARCANA
          </HomeHeroH1>
          <HeroSubContainer>
            <HeroSubText size="16px" weight="400">
              Collect More Leads
            </HeroSubText>
            <HomeHeroSubArrow size={20} />
            <HeroSubText size="16px" weight="400">
              Convert Them To Clients
            </HeroSubText>
            <HomeHeroSubArrow size={20} />
            <HeroSubText size="16px" weight="400">
              Demand Glowing Reviews
            </HeroSubText>
            <HomeHeroSubArrow size={20} />
            <HeroSubText size="16px" weight="400">
              Motivate Repeat Business
            </HeroSubText>
          </HeroSubContainer>
          <HomeButtonContainer>
            <Button
              buttonType={BUTTON_TYPE_CLASS.base}
              height="50px"
              width="150px"
              fontSize="18px"
            >
              See Demo
            </Button>
            <Button
              buttonType={BUTTON_TYPE_CLASS.base}
              height="50px"
              width="150px"
              fontSize="18px"
            >
              Sign-Up
            </Button>
          </HomeButtonContainer>
        </HomeHeroContainer>
      </HomeHeroContentWrapper>
      <HomeHeroBGV autoPlay loop muted playsInLine>
        <source src={HomeHeroMov} type="video/mp4"></source>
      </HomeHeroBGV>
    </>
  );
};

export default HomeHero;
