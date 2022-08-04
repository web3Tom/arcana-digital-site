import Home from "../src/routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./routes/footer/footer.component";
import Messaging from "./routes/services/messaging/messaging.component";
import Payments from "./routes/services/payments/payments.component";
import Reviews from "./routes/services/reviews/reviews.component";
import WebDevelopment from "./routes/services/web-development/web-development.component";
import Webchat from "./routes/services/webchat/webchat.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="messaging" element={<Messaging />} />
          <Route path="payments" element={<Payments />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="webdevelopment" element={<WebDevelopment />} />
          <Route path="webchat" element={<Webchat />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
