// State to manage:

// user (user details like name, email, profile picture)
// isAuthenticated (boolean to check if the user is logged in)
// login() and logout() functions
import React, { createContext, useState, useContext, ReactNode } from 'react';


// interface defines the expected structure of an object
export interface IAuthContext {
    isLoggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
  }

//   default valueh
  export const AuthContext = createContext<IAuthContext>({
    isLoggedIn: false,
    logIn: () => {},
    logOut: () => {},
  });

  export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const logIn = () => setIsLoggedIn(true);
    const logOut = () => setIsLoggedIn(false);
  
    return (
        // Provider component is a special part of a React Context that makes data (state and functions) available to any child component inside the tree.
      <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
        {children}
      </AuthContext.Provider>
    );
};

    export const useAuth = () => useContext(AuthContext);