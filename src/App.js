import "./App.css";
import Login from "./components/auth/Login";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import authContext from "./context/AuthContext";

function App() {
  let [tLogin, setTLogin] = useState(localStorage.getItem("auth") === "true");
  let [showLoginForm, setLoginForm] = useState(false);

  const loginManager = () => {
    setTLogin(true);
    localStorage.setItem("auth", true);
    setLoginForm(true);
  };

  const logoutManager = () => {
    setTLogin(false);
    localStorage.setItem("auth", false);
  };

  return (
    <authContext.Provider value={{ isLoggedIn: tLogin }}>
      <Products
        manageLogin={logoutManager}
        setLogin={tLogin}
        manageLogout={loginManager}
      />
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
