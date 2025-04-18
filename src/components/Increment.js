import { useReducer } from "react";

function userReducer(currentUser, action) {
  if (action.type === "setUserName") {
    let updatedUser = currentUser;
    currentUser.username = action.username;
    return updatedUser;
    /* return {
      username: action.username,
      isUserNameValid: currentUser.isUserNameValid,
      password: currentUser.password,
      isPasswordValid: currentUser.isPasswordValid,
      usernameTouch: currentUser.usernameTouch,
      passwordTouch: currentUser.passwordTouch,
    }; */
  } else if (action.type === "validateUsername") {
    return {
      username: currentUser.username,
      isUserNameValid: action.username.length > 0 ? true : false,
      password: currentUser.password,
      isPasswordValid: currentUser.isPasswordValid,
      usernameTouch: true,
      passwordTouch: currentUser.passwordTouch,
    };
  } else if (action.type === "setPassword") {
    return {
      username: currentUser.username,
      isUserNameValid: currentUser.isUserNameValid,
      password: action.password,
      isPasswordValid: currentUser.isPasswordValid,
      usernameTouch: currentUser.usernameTouch,
      passwordTouch: currentUser.passwordTouch,
    };
  } else if (action.type === "validatePassword") {
    return {
      username: currentUser.username,
      isUserNameValid: currentUser.isUserNameValid,
      password: currentUser.password,
      isPasswordValid: action.password.length > 0 ? true : false,
      usernameTouch: currentUser.usernameTouch,
      passwordTouch: true,
    };
  }
}

function Increment() {
  let [user, dispatchUser] = useReducer(userReducer, {
    username: "",
    isUserNameValid: false,
    password: "",
    isPasswordValid: false,
    usernameTouch: false,
    passwordTouch: false,
  });

  const formSubmit = (e) => {
    e.preventDefault();
    if (user.isUserNameValid && user.isPasswordValid) {
      console.log("Login successful", user.username, user.password);
    }
  };

  const userNameChangeHandler = (value) => {
    dispatchUser({ username: value, type: "setUserName" });
  };

  const userNameBlurHandler = (value) => {
    dispatchUser({ username: value, type: "validateUsername" });
  };

  const passwordChangeHandler = (value) => {
    dispatchUser({ password: value, type: "setPassword" });
  };

  const passwordBlurHandler = (value) => {
    dispatchUser({ password: value, type: "validatePassword" });
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <div>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => userNameChangeHandler(e.target.value)}
            onBlur={(e) => userNameBlurHandler(e.target.value)}
          />
        </div>
        {!user.isUserNameValid && user.usernameTouch ? (
          <div style={{ color: "red" }}>User name is not valid!</div>
        ) : (
          <></>
        )}
        <div>
          <input
            type="text"
            placeholder="password"
            onChange={(e) => passwordChangeHandler(e.target.value)}
            onBlur={(e) => passwordBlurHandler(e.target.value)}
          />
        </div>
        {!user.isPasswordValid && user.passwordTouch ? (
          <div style={{ color: "red" }}>Password is not valid!</div>
        ) : (
          <></>
        )}
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
}
export default Increment;
