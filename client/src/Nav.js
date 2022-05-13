import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Nav.css";
import Home from "./Home";
import Account from "./Account";
import Cart from "./Cart";
import Searchbar from "./Searchbar";
import { useState } from "react";

function Nav( {onLogout}) {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <Router>
      <div>
        <nav>
          <div className="navContent">
            <div className="link">
              <Link to="/">Home</Link>
            </div>

            <Searchbar className="search_bar" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="link">
              <Link to="/account">Account</Link>
            </div>

            <div className="link">
              <Link to="/cart">Cart</Link>
            </div>

            <div>
            <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} setCart={setCart} />
          </Route>
          <Route path="/">
            <Home setCart={setCart} searchTerm={searchTerm} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;
