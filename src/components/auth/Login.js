import Products from "../Products";
import { use, useEffect, useState } from "react";

function Login() {
  let [loggedIn, setLoggedIn] = useState(false);
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [isUsernameValid, setIsUsernameValid] = useState(false);
  let [isPasswordValid, setIsPasswordValid] = useState(false);
  let [isUsernameTouched, setIsUsernameTouched] = useState(false);
  let [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const logIn = (e) => {
    e.preventDefault();

    if (isUsernameValid && isPasswordValid) {
      let isLoggedIn = true;
      setLoggedIn(isLoggedIn);
      localStorage.setItem("auth", isLoggedIn);
    }
  };

  const validateUsername = (value) => {
    setUserName(value);
    console.log("Username before validation", value);
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      if (username.includes("@")) {
        setIsUsernameValid(true);
        console.log("username After validation", username);
      } else {
        console.log("username Validation failed");
      }
    }, 1000);
    console.log("Time out by setTimeOut", timeOut);
    return () => {
      console.log("Clear timeout : ", timeOut);
      clearTimeout(timeOut);
    };
  }, [username]);

  const validatePassword = (value) => {
    setPassword(value);
    console.log("Password before validation:", value);
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      if (password.length > 8) {
        setIsPasswordValid(true);
        console.log("Password after validation :", password);
      } else {
        console.log("Password validation failed");
      }
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [password]);

  return (
    <>
      {loggedIn ? (
        <Products setLoggedIn={setLoggedIn} />
      ) : (
        <form onSubmit={logIn}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onBlur={() => setIsUsernameTouched(true)}
              onChange={(e) => validateUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onBlur={() => setIsPasswordTouched(true)}
              onChange={(e) => validatePassword(e.target.value)}
            />
          </div>

          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      )}
      {!isUsernameValid && isUsernameTouched ? (
        <div style={{ color: "red" }}>Username Invalid!</div>
      ) : (
        <> </>
      )}
      {!isPasswordValid && isPasswordTouched ? (
        <div style={{ color: "red" }}>Password Invalid!</div>
      ) : (
        <> </>
      )}
    </>
  );
}
export default Login;
