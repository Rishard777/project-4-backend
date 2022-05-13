import "./App.css";
import Nav from "./Nav.js";
import Home from "./Home";
import Account from "./Account";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }
   if (user) {
  return (
    <div>
      <Nav user={user} onLogout={handleLogout} />
      <h1> Welcome, {user.name}, Check out our Instruments on the Home Page!</h1>
    </div>
  )}
  else {
    return <Account onLogin={handleLogin}/>
  }
}

export default App;
