import "./Account.css";
import { useState } from "react";

function Account({ loggedIn, setLoggedIn }) {
  const [createAccount, setCreateAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => setLoggedIn(user));
  }

  // function handleSignIn(e) {
  //   e.preventDefault();
  //   setLoggedIn(true);

  //   const config = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //     }),
  //   }

  //   fetch("http://localhost:3000/users", config)
  //     .then((r) => r.json())
  //     .then(console.log("logged in"));
  // }

  return (
    <div className="accountWrapper">
      {loggedIn ? (
        <h2>logged In!</h2>
      ) : (
        <div>
          <form onSubmit={handleSignIn}>
            <h3>{createAccount ? "Create an Account" : "Sign In"}</h3>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="searchbar login"
              placeholder={createAccount ? "Set Username" : "Username"}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="searchbar login"
              placeholder={createAccount ? "Set Password" : "Password"}
            />

            <button type="submit" className="searchbar login">
              {createAccount ? "Create Account" : "Login"}
            </button>
          </form>

          <div>
            <h3>
              {createAccount
                ? "Already have an Account?"
                : "Don't have an Account?"}
            </h3>
            <button
              onClick={() => setCreateAccount(!createAccount)}
              className="searchbar login"
            >
              {createAccount ? "Sign In" : "Create Account"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
