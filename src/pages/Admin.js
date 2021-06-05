import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Admin = () => {
  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }
  return (
    <div className="container">
      <h2>Welcome admin, what do you want to do?</h2>
      <div className="admin">
        <div className="admin__links">
          <Link to="/add" className="admin__link">
            Add Product
          </Link>
          <Link to="/edit" className="admin__link">
            Edit Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
