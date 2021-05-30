import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="nav" bg="dark" expand="lg">
      <NavLink to="/" className="nav__logo">
        Tuneshop
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="nav__icon" id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            exact
            to="/"
            className="nav__link"
            activeClassName="nav__active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/products"
            className="nav__link"
            activeClassName="nav__active"
          >
            Products
          </NavLink>
          <NavLink
            exact
            to="/cart"
            className="nav__link"
            activeClassName="nav__active"
          >
            Cart
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
