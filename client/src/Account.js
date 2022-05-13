import "./Account.css";
import { useState } from "react";

function Account( {onLogin}) {
  const [createAccount, setCreateAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        r.json().then((user) => onLogin(user));
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
      (<button  type ="submit" className="searchbar login" onSubmit={handleSignUp}>CreateAccount</button>) :
      (<button  type ="submit" className="searchbar login" onSubmit={handleSignIn}>Login</ button>)
      }
            
          </form>
        
          {errors ? <div>{errors}</div> : null}

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
