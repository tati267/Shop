import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.compoment";
import { auth } from "../../firebase/firebase.utils";
import "./sign.styles.scss";

const SignPage = () => (
  <div className="sign">
    <SignIn />
    <SignUp />
  </div>
);

export default SignPage;
