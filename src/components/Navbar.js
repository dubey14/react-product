import { useContext } from "react";
import "../css/Navbar.css";
import authContext from "../context/AuthContext";

function Navbar(props) {
  console.log("Navbar props", props.isLoggedIn);

  let context = useContext(authContext);
  const logOut = () => {
    props.setLogout();
  };

  const logIn = () => {
    props.setLogin();
  };

  const switchProfile = () => {
    context.setLoggedInUser((prev) => (prev === "Vidhi" ? "Akash" : "Vidhi"));
  };

  return (
    <div>
      <nav className="navbar">
        {props.isLoggedIn ? (
          <>
            <div className="cart">{context.loggedInUser}</div>
            <div className="cart">
              {props.cartCount > 0 ? <>Cart {props.cartCount}</> : <>Cart</>}
            </div>
            <button className="logout-button" onClick={logOut}>
              Logout
            </button>
          </>
        ) : (
          <button className="login-button" onClick={logIn}>
            Login
          </button>
        )}
        <button onClick={switchProfile}>Switch Profile</button>
      </nav>
    </div>
  );
}

export default Navbar;
