import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          Tuneshop
        </Link>
        <div className="nav__icon" onClick={handleToggle}>
          <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
