import { Outlet } from "react-router-dom";

import HomeHero from "../../components/hero/home-hero/home-hero.component";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Outlet />
    </>
  );
};

export default Home;
