import { createContext, useState } from "react";

export const AuthenticateContext = createContext();

export const AuthenticateProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthenticateContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthenticateContext.Provider>
  );
};
