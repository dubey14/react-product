import { useRef, useState } from "react";

function Login(props) {
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [isUsernameValid, setIsUsernameValid] = useState();
  let [isPasswordValid, setIsPasswordValid] = useState();
  let [loginButtonClicked, setLoginButtonClicked] = useState(false);

  let usernameRef = useRef();
  let passwordRef = useRef();

  const logIn = (e) => {
    e.preventDefault();
    setLoginButtonClicked(true);
    if (username.includes("@")) {
      setIsUsernameValid(true);
      console.log("username After validation", username);
    } else {
      console.log("username Validation failed");
    }
    if (password.length > 8) {
      setIsPasswordValid(true);
      console.log("Password after validation :", password);
    } else {
      console.log("Password validation failed");
    }
    if (!isUsernameValid) {
      console.log("Username Invalid ", usernameRef);
      usernameRef.current.focus();
    } else if (!isPasswordValid) {
      console.log("Password Invalid ", passwordRef);
      passwordRef.current.focus();
    }
    if (isUsernameValid && isPasswordValid) {
      props.manageLogin();
    }
  };

  return (
    <>
      <form onSubmit={logIn}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
            ref={usernameRef}
          />
          {!isUsernameValid && loginButtonClicked ? (
            <div style={{ color: "red" }}>Username Invalid!</div>
          ) : (
            <> </>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
          {!isPasswordValid && loginButtonClicked ? (
            <div style={{ color: "red" }}>Password Invalid!</div>
          ) : (
            <> </>
          )}
        </div>

        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
}
export default Login;
