import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const PROD = false;
  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (document.cookie) {
      console.log("cookie:", document.cookie);
      let token = document.cookie;
      const cookieAuth = {
        token,
      };

      fetch(`${URL}/api/user/fetchByToken/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(cookieAuth),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw Error("Invalid token");
          }
        })
        .then((data) => {
          setUser(data);
        })
        .catch((err) => console.log(err));
    } else {
      setUser(null);
    }
  }, [setUser]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
