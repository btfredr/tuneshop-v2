import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/edit" exact component={Edit}></Route>
          <Route path="/add" exact component={Add}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/products" exact component={Products}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
