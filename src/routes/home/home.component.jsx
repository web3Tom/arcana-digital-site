import { Outlet } from "react-router-dom";

import { HeroWrapper, HomeTitle } from "./home.styles";

const Home = () => {
  return (
    <HeroWrapper>
      <HomeTitle>HOME</HomeTitle>
      <Outlet />
    </HeroWrapper>
  );
};

export default Home;
