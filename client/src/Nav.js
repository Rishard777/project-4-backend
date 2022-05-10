import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <div className="navContent">
            <div className="link">
              <Link to="/">Home</Link>
            </div>

            <input className="searchbar" type="text" placeholder="Search..." />

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
            <Account />
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

function Home() {
  return <h2>Home</h2>;
}

function Account() {
  return <h2>About</h2>;
}

function Cart() {
  return <h2>Users</h2>;
}
