import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/login">
      <button className="btn">Login</button>
    </Link>
  );
};

export default Button;
