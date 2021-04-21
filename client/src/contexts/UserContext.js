import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const PROD = true;
  const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";
  const [user, setUser] = useState(null);
  const [loading, setLoading] = React.useState(true);

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
          console.log(data);
          setUser(data);
          setLoading(false);
        })
        .catch((err) =>{
          console.log(err);
          setLoading(false);
      });
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [URL, setUser]);

  

if(loading){
  return <div>loading..</div> 
}

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
