import React from "react";
import "../styles/login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../service/firebaseAuth";
import { useStateValue } from "../Providers/StateProvider";
import { actionTypes } from "../reducers/reducers";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
          
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1920px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sing In
      </Button>
    </div>
  );
}

export default Login;
