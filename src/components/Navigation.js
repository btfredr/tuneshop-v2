import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { Link, useHistory } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [auth, setAuth] = useContext(AuthContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMobileMenu = () => {
    setToggle(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 990) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 990) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const history = useHistory();

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out");
    if (confirmLogout) {
      setAuth(null);
      history.push("/");
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          Tuneshop <i className="fas fa-record-vinyl"></i>
        </Link>
        <div className="navbar__icon" onClick={handleToggle}>
          <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <>
          <ul className={toggle ? "navbar__menu active" : "navbar__menu"}>
            <li className="navbar__item">
              <Link to="/" className="navbar__link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/products"
                className="navbar__link"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/cart"
                className="navbar__link"
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
            {auth ? (
              <>
                <li
                  className="navbar__item"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Link
                    to="/admin"
                    className="navbar__link"
                    onClick={closeMobileMenu}
                  >
                    Admin Panel <i className="fas fa-caret-down" />
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
                <li className="navbar__item">
                  <Link to="/" onClick={logout} className="navbar__login">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="navbar__item">
                  <Link
                    to="/login"
                    className="navbar__login"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </>
      </nav>
    </>
  );
};

export default Navigation;
