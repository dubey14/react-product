import "../css/Navbar.css";

function Navbar(props) {
  console.log("Navbar props", props.isLoggedIn);
  const logOut = () => {
    props.setLogout();
  };

  const logIn = () => {
    props.setLogin();
  };

  return (
    <div>
      <nav className="navbar">
        {props.isLoggedIn ? (
          <>
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
      </nav>
    </div>
  );
}

export default Navbar;
