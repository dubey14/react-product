import React from "react";

let authContext = React.createContext({
  isLoggedIn: false,
  isLoggedOut: false,
});

export default authContext;
