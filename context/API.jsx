import { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { API } from "../api/API.js";
import { useAuthContext } from "./Auth.jsx";

const APIcontext = createContext();

export function useAPIContext() {
  const context = useContext(APIcontext);
  if (!context) {
    throw new Error("useAPIContext must be used within an APIProvider");
  }

  return context;
}

export function APIProvider({ children }) {
  const { token } = useAuthContext();

  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api && token) {
      setApi(new API(token));
    }
  }, [token]);

  if (!!token && !api) {
    return <ActivityIndicator size={50} />;
  }

  return <APIcontext.Provider value={api}>{children}</APIcontext.Provider>;
}
