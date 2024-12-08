import { createContext, useContext, useState } from "react";

const authContext = createContext({
  token: null,
});

export const useAuthContext = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  function login(token) {
    setToken(token);
  }

  function logout() {
    setToken(null);
  }

  return (
    <authContext.Provider value={{ token, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
