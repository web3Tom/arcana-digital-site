import Home from "../src/routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Footer from "./routes/footer/footer.component";
import Messaging from "../src/components/messaging/messaging.component";
import { Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="messaging" element={<Messaging />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
