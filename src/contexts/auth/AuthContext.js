import React, { useState } from 'react';
export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
