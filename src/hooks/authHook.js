import { useState, useCallback, useEffect } from "react";
import {
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback(async (uid) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/auth/local`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);

    if (!response.ok) {
      // throw Error("failed in auth state")
      Redirect(login);
    }

    const data = await response.json();

    setUserId(data.id);
    localStorage.setItem("userid", data.id);
  }, []);

  const logout = useCallback(async () => {
    await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setUserId(null);
    localStorage.removeItem("userid");
  }, []);

  useEffect(() => {
    const userid = localStorage.getItem("userid");
    console.log(userid);
    if (userid) {
      login(userid);
    }
  }, [login]);

  return { token, login, logout, userId };
};
