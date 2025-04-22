import "./App.css";
import Login from "./components/auth/Login";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import authContext from "./context/AuthContext";

function App() {
  let [tLogin, setTLogin] = useState(localStorage.getItem("auth") === "true");

  let [showLoginForm, setLoginForm] = useState(false);
  let [loggedInUser, setLoggedInUser] = useState();

  const loginManager = () => {
    setTLogin(true);
    localStorage.setItem("auth", true);
    localStorage.setItem("userLoggedIn", "Vidhi");
    setLoginForm(true);
    setLoggedInUser("Akash");
  };

  const logoutManager = () => {
    setTLogin(false);
    localStorage.setItem("auth", false);
    localStorage.setItem("userLoggedIn", "");
  };

  return (
    <authContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Login manageLogin={loginManager} />
      {/* <Products
        manageLogin={logoutManager}
        setLogin={tLogin}
        manageLogout={loginManager}
      /> */}
      {/* {showLoginForm ? (
        <Products
          manageLogin={logoutManager}
          setLogin={tLogin}
          manageLogout={loginManager}
        />
      ) : (
        <Login manageLogin={loginManager} />
      )} */}
    </authContext.Provider>
  );
}

export default App;
