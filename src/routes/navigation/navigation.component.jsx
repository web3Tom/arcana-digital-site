import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>Software</li>
        <Link to="/messaging">Messaging</Link>
        <li>Pricing</li>
        <li>Demo</li>
        <li>Why Arcana?</li>
        <li>LOGIN</li>
        <li>Sign Up</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navigation;
