import "./Account.css";
import { useState } from "react";

function Account( {onLogin}) {
  const [createAccount, setCreateAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState([])
  const [errors, setErrors] = useState([])

  function handleSignIn(e) {
    e.preventDefault();
    const user = {
      username: username,
      password
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => onLogin(user));
      } else {
        r.json().then((err) => setError(err.error));
      }
    });
  }

  function handleSignUp(e) {
    e.preventDefault()
    const user = {
        name: username,
        password
    }
   
    fetch(`http://localhost:3000/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
        if(json.errors) setErrors(Object.entries(json.errors))
      })
  }

  return (
    <div className="accountWrapper">
     <h1 className="sign_in">Sign in to shop R&A Instruments!</h1>
        <div>
          <form>
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
            
            {createAccount ? 
      (<button  className="searchbar login" onClick={handleSignUp}>CreateAccount</button>) :
      (<button  className="searchbar login" onClick={handleSignIn}>Login</ button>)
      }
          {error ? <div>{error}</div> : null}
          {errors ? <div>{errors}</div> : null}
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
      
    </div>
  );
}

export default Account;
