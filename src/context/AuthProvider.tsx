import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the shape of the AuthContext
interface AuthContextType {
  isLoggedin: boolean;
  setIsLoggedin: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Define props for the AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        setIsLoggedin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
