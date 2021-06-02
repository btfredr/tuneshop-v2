import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/login">
      <button className="nav__link--mobile">Login</button>
    </Link>
  );
};

export default Button;
