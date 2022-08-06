import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import {
  HomeHero,
  HomeTitle,
  ServiceContainer,
  ServiceTitle,
} from "./home.styles";

const Home = () => {
  return (
    <>
      <HomeHero>
        <HomeTitle
          as={motion.h1}
          font={`var(--header2-font)`}
          color="white"
          weight="900"
          size="50px"
        >
          Modernize your Business
          <br />
          in Less than a Week
        </HomeTitle>
        <ServiceContainer as={motion.div}>
          <ServiceTitle
            as={motion.h1}
            color="white"
            size="36px"
            font={`var(--header2-font)`}
          >
            Premier CRM Database
          </ServiceTitle>
          <ServiceTitle
            as={motion.h1}
            color="white"
            size="36px"
            font={`var(--header2-font)`}
          >
            Automated Messaging
          </ServiceTitle>
          <ServiceTitle
            as={motion.h1}
            color="white"
            size="36px"
            font={`var(--header2-font)`}
          >
            Done-for-you Services
          </ServiceTitle>
        </ServiceContainer>
      </HomeHero>
      <Outlet />
    </>
  );
};

export default Home;
