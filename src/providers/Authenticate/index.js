import { createContext, useState, useEffect } from "react";

export const AuthenticateContext = createContext();

export const AuthenticateProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@habits:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);
  console.log(authenticated);

  return (
    <AuthenticateContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthenticateContext.Provider>
  );
};
