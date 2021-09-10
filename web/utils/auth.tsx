import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "./constants";

export const AuthContext = createContext({
  user: null,
  user_id: null,
  loggedIn: false,
  serverPresent: false,
});
async function getData(id: string): Promise<string> {
  let resp: string;
  await axios
    .get(`${serverUrl}/api/auth/getUser`, {
      headers: {
        Authorization: `bearer ${id}`,
        "Access-Control-Allow-Origin": "http://localhost:8000",
      },
    })
    .then(async (e) => {
      resp = await e.data;
    });

  return resp;
}

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [serverPresent, setserverPresent] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("accessToken");
    if (id !== null) {
      setUserId(id);
      getData(id)
        .then((resp) => {
          setUser(resp);
          setLoggedIn(true);
          setserverPresent(true);
        })
        .catch(() => {
          setserverPresent(false);
        });
    } else {
      setLoggedIn(false);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user_id: userId,
        user,
        loggedIn,
        serverPresent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth: any = () => useContext(AuthContext);
