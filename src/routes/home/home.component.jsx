import { Outlet } from "react-router-dom";
import HomeHero from "../../components/hero/home-hero/home-hero.component";
import ReviewSnippet from "../../components/page-items/review-snippet/review-snippet.component";
import { PageTitleSub } from "../../components/page-items/page-title-sub/page-title-sub.component";
import ServiceSection from "../../components/page-items/services/services.component";

import reviewIMG from "../../assets/review-images/review-img-jm.png";

const Home = () => {
  return (
    <>
      <HomeHero />
      <ReviewSnippet
        img={reviewIMG}
        name="Jeannine Martinelli"
        biz="LJ Shore Cuts"
        review="I am the least tech-saavy person you'll ever meet, but Arcana is so
          simple! Even when I had questions, the Aracana team was there to
          provide the answers."
      />
      <PageTitleSub
        btitle="Arcana Drive Results "
        title="for all entreprenuers"
        sub="It's the best there is"
      />
      <ServiceSection />
      <Outlet />
    </>
  );
};

export default Home;
