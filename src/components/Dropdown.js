import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <ul
      onClick={handleToggle}
      className={toggle ? "dropdownMenu--clicked" : "dropdownMenu"}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index} className="dropdownMenu__item">
            <Link
              className={item.className}
              to={item.path}
              onClick={() => setToggle(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
