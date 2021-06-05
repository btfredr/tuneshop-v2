import { Link } from "react-router-dom";

const Admin = () => {
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
