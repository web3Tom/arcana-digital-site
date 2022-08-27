import Home from "../src/routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./routes/footer/footer.component";
import Pricing from "./routes/pricing/pricing.component";
import Demo from "./routes/demo/demo.component";
import WhyArcana from "./routes/why-arcana/why-arcana.component";
import Messaging from "./routes/services/messaging/messaging.component";
import Payments from "./routes/services/payments/payments.component";
import Reviews from "./routes/services/reviews/reviews.component";
import WebDevelopment from "./routes/services/web-development/web-development.component";
import Webchat from "./routes/services/webchat/webchat.component";
import AboutUs from "./routes/about-us/about-us.component";
import ContactUs from "./routes/contact-us/contact-us.component";
import TermsOfService from "./routes/misc-pages/terms-of-service.component";
import PrivacyPolicy from "./routes/misc-pages/privacy-policy.component";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

//function to scroll-to-top when any new page is rendered (a link is clicked)
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="demo" element={<Demo />} />
            <Route path="why-arcana" element={<WhyArcana />} />
            <Route path="messaging" element={<Messaging />} />
            <Route path="payments" element={<Payments />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="webchat" element={<Webchat />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
        <Footer />
      </Wrapper>
    </>
  );
};

export default App;
