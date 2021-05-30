import Home from "./pages/Home";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route route="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
