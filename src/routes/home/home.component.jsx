import { ReactComponent as LOGO } from "../../assets/arcana-logo-final_dark-light-blue-min.svg";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <div>
        <LOGO alt="arcana logo" />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
