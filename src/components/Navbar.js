import "../css/Navbar.css";

function Navbar(props) {
  const logOut = () => {
    localStorage.setItem("auth", false);
  };

  return (
    <div>
      <nav className="navbar">
        <button className="logout-button" onClick={logOut}>
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
