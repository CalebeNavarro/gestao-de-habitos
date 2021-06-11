import { createContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export const AuthenticateContext = createContext();

export const AuthenticateProvider = ({ children }) => {


  const isLoged = () => { 
    const token = JSON.parse(localStorage.getItem("@habits:token")) || null;
    if (token) {
      return true;
    }
    return false;
  }

  return (
    <AuthenticateContext.Provider value={{ isLoged }}>
      {children}
    </AuthenticateContext.Provider>
  );
};
