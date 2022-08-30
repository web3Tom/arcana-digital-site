import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import HomeHeroMov from "../../../assets/hero-images/videos/home-hero-mov.mp4";
import PosterIMG from "../../../assets/hero-images/home-hero-posterIMG.png";
import appscreenshot from "../../../assets/software/software-snippet.png";

import {
  HomeHeroContainer,
  HeroTitleContainer,
  HomeHeroH1,
  HomeHeroH2,
  HomeHeroBGV,
  subcontaineranimation,
  subtextanimation,
  HeroSubContainer,
  HeroSubTextContainer,
  HeroSubText,
  HomeHeroSubArrow,
  HomeHeroDesc,
  HomeButtonContainer,
  HomeButton1,
  HomeGradientButton,
  ArrowContainer,
  SoftwareImg,
} from "./home-hero.styles";
import { DownArrowAnimation } from "./home-hero-animations";
import { device, GlobalContentContainer } from "../../global.component.styles";

const HomeHero = () => {
  const laptopLView = useMediaQuery({ query: device.laptopL });

  return (
    <>
      <GlobalContentContainer>
        <HomeHeroContainer>
          <HeroTitleContainer>
            <HomeHeroH1
              as={motion.h1}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              Goodbye <b>Complicated</b> CRMs.
            </HomeHeroH1>
            <HomeHeroH2
              as={motion.h1}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >
              Hello <b>Arcana</b>
            </HomeHeroH2>
          </HeroTitleContainer>
          <HeroSubContainer
            variants={subcontaineranimation}
            initial="hidden"
            animate="show"
          >
            <HeroSubTextContainer variants={subtextanimation}>
              <HeroSubText>
                <b>Collect</b> More Leads
              </HeroSubText>
            </HeroSubTextContainer>
            <HeroSubTextContainer variants={subtextanimation}>
              <HomeHeroSubArrow size={laptopLView ? 20 : 25} />
              <HeroSubText as={motion.h2}>
                <b>Convert</b> Them To Clients
              </HeroSubText>
            </HeroSubTextContainer>
            <HeroSubTextContainer variants={subtextanimation}>
              <HomeHeroSubArrow size={laptopLView ? 20 : 25} />
              <HeroSubText as={motion.h2}>
                <b>Demand</b> Glowing Reviews
              </HeroSubText>
            </HeroSubTextContainer>
            <HeroSubTextContainer variants={subtextanimation}>
              <HomeHeroSubArrow size={laptopLView ? 20 : 25} />
              <HeroSubText as={motion.h2}>
                <b>Motivate</b> Repeat Business
              </HeroSubText>
            </HeroSubTextContainer>
          </HeroSubContainer>
          <HomeHeroDesc>
            We implement and manage the world's best CRM
            <br />
            for small and mid-sized businesses.
          </HomeHeroDesc>
          <HomeButtonContainer>
            <HomeButton1 as={motion.button}>See Demo</HomeButton1>
            <HomeGradientButton as={motion.button} />
          </HomeButtonContainer>
          <ArrowContainer>
            <DownArrowAnimation />
          </ArrowContainer>
        </HomeHeroContainer>
        <SoftwareImg
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={appscreenshot}
        />
      </GlobalContentContainer>
      <HomeHeroBGV autoPlay loop muted playsInLine poster={PosterIMG}>
        <source src={HomeHeroMov} type="video/mp4"></source>
      </HomeHeroBGV>
    </>
  );
};

export default HomeHero;
