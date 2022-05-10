import "./Account.css";
import { useState } from "react";

function Account(loggedIn, setLoggedIn) {
  const [createAccount, setCreateAccount] = useState(false);

  function handleSignIn(e) {
    e.preventDefault();

    setLoggedIn(true);
  }

  return (
    <div className="accountWrapper">
      {!loggedIn ? (
        <h2>logged In!</h2>
      ) : (
        <div>
          <form onSubmit={handleSignIn}>
            <h3>{createAccount ? "Create an Account" : "Sign In"}</h3>

            <input
              type="text"
              className="searchbar login"
              placeholder={createAccount ? "Set Username" : "Username"}
            />
            <input
              type="password"
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
