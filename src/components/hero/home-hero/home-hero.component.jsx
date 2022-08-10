import { motion } from "framer-motion";

import {
  HomeHeroContainer,
  HomeHeroContentWrapper,
  HomeTitle,
  ServiceContainer,
  ServiceTitle,
} from "./home-hero.styles";

const HomeHero = () => {
  return (
    <>
      <HomeHeroContainer>
        <HomeHeroContentWrapper>
          <HomeTitle
            as={motion.h1}
            font={`var(--header2-font)`}
            color={`var(--color-secondary)`}
            weight="900"
            size="50px"
          >
            Modernize your Business <br />
            in Less than a Week
          </HomeTitle>
          <ServiceContainer as={motion.div}>
            <ServiceTitle
              as={motion.h1}
              color={`var(--color-secondary)`}
              size="36px"
              font={`var(--header2-font)`}
            >
              Premier CRM Database
            </ServiceTitle>
            <ServiceTitle
              as={motion.h1}
              color={`var(--color-secondary)`}
              size="36px"
              font={`var(--header2-font)`}
            >
              Automated Messaging
            </ServiceTitle>
            <ServiceTitle
              as={motion.h1}
              color={`var(--color-secondary)`}
              size="36px"
              font={`var(--header2-font)`}
            >
              Done-for-you Services
            </ServiceTitle>
          </ServiceContainer>
        </HomeHeroContentWrapper>
      </HomeHeroContainer>
    </>
  );
};

export default HomeHero;
