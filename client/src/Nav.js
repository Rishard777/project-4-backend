import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Nav.css";
import Home from "./Home";
import Account from "./Account";
import Cart from "./Cart";
import Searchbar from "./Searchbar";
import { useState } from "react";

function Nav() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <div className="navContent">
            <div className="link">
              <Link to="/">Home</Link>
            </div>

            <Searchbar />

            <div className="link">
              <Link to="/account">Account</Link>
            </div>

            <div className="link">
              <Link to="/cart">Cart</Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/account">
            <Account loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;
