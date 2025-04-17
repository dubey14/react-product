import { useReducer, useState } from "react";

function change(currentState, action) {
  console.log("Checking current state", currentState.count);
  if (action === "increment") {
    return { count: currentState.count + 1 };
  } else if (action === "decrement") {
    return { count: currentState.count - 1 };
  }
}

function usernameReducer(currentUsername, action) {
  if (action.type === "setUserName") {
    console.log("Inside username If", action.uname);
    return {
      uname: action.uname,
      isUnameValid: currentUsername.isUnameValid,
    };
  } else if (action.type === "validateValue") {
    console.log("Inside else if");
    return {
      uname: currentUsername.uname,
      isUnameValid: action.uname.length > 0 ? true : false,
    };
  }
}

function passwordReducer(currentPassword, action) {
  if (action.type === "setPassword") {
    console.log("Inside password If", action.pword);
    return {
      pword: action.pword,
      isPwordValid: currentPassword.isPwordValid,
    };
  } else if (action.type === "validatePassword") {
    console.log("Inside password reducer else if");
    return {
      pword: currentPassword.pword,
      isPwordValid: action.pword.length > 0 ? true : false,
    };
  }
}

function Increment() {
  let [counter, setCounter] = useState(0);
  let [complexCounter, send] = useReducer(change, { count: 10 });

  let [username, dispatchUsername] = useReducer(usernameReducer, {
    uname: "",
    isUnameValid: false,
  });

  let [password, dispatchPassword] = useReducer(passwordReducer, {
    pword: "",
    isPwordValid: false,
  });

  const addCounter = () => {
    send("increment");
  };

  const subCounter = () => {
    send("decrement");
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Inside Form Submit Method", username.uname);
    console.log("checking username", username.isUnameValid);
    if (username.isUnameValid && password.isPwordValid) {
      console.log("Login successful", username.uname, password.pword);
    }
  };

  const userNameChangeHandler = (value) => {
    console.log("Username from username handler", value);
    dispatchUsername({ uname: value, type: "setUserName" });
  };

  const userNameBlurHandler = (value) => {
    console.log("From userNameBlurHandler");
    dispatchUsername({ uname: value, type: "validateValue" });
  };

  const passwordChangeHandler = (value) => {
    console.log("Password from password handler", value);
    dispatchPassword({ pword: value, type: "setPassword" });
  };

  const passwordBlurHandler = (value) => {
    console.log("Password from passwordBlurHandler", value);
    dispatchPassword({ pword: value, type: "validatePassword" });
  };

  return (
    <>
      <input type="button" value="-" onClick={subCounter} />
      <span>{complexCounter.count}</span>
      <input type="button" value="+" onClick={addCounter} />

      <form onSubmit={formSubmit}>
        <div>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => userNameChangeHandler(e.target.value)}
            onBlur={(e) => userNameBlurHandler(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            onChange={(e) => passwordChangeHandler(e.target.value)}
            onBlur={(e) => passwordBlurHandler(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
}
export default Increment;
