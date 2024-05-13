import React, {useState, useRef} from "react";
import {Navigate , Link } from "react-router-dom";

import EditField from "../widgets/EditField";
import EditFieldLabel from "../widgets/EditFieldLabel";
import Button from "../widgets/Button";
import Heading from "../widgets/Heading";
import LangSelectionView from "./LangSelection";
import EndPoints from "../constants/EndPoints";
import LoginRegistrationPageHeader from "../widgets/LoginRegisterHeader";

function LoginPage () {
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const [emailClass, setEmailClass] = useState('');

  const emailValidate = (evt) => {
    if (evt.target.checkValidity()) {
      setEmailClass("valid-input");
    } else {
      setEmailClass("invalid-input");
    }
  }

  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState();

  const submitForm = async () => {
    if (emailClass === "invalid-input") {
      setErrorMessage("Entered Invalid email id");
      return;
    }

    try {
      const userInfo = btoa(emailRef.current.childNodes[0].value+':'+pwdRef.current.childNodes[0].value);
      const res = await fetch(EndPoints.login, {
        method: 'POST',
        body: JSON.stringify({userInfo}),
        headers: { 'Content-type': 'application/json' }
      });

      const data = await res.json();
      if (data.status) {
        setErrorMessage("");
        localStorage.setItem("username", data.user.username);
        localStorage.setItem("selectedLang", data.user.selectedLanguage);
        setUser(data.user);
      } else {
        setErrorMessage("Entered invalid email id or password");
        setUser("");
      }
    } catch (err) {
      console.log(err);
    }
     
  }

  return (
    <>
      {user && !user.selectedLanguage && <LangSelectionView userProfile={user} />}
      {user && user.selectedLanguage && <Navigate to="/home" userProfile={user} replace="true"/>}
      { !user &&
        <div className="p-6 max-w-sm mx-auto mt-32 bg-white rounded-xl shadow-lg items-center">
          <div>
            <LoginRegistrationPageHeader />
          </div>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
            <div className="sm-center">
              <Heading textContent="Sign in to your account" />
            </div>

          <div className="mt-10 sm-center">
            <div className="space-y-4">
              <div>
                <EditFieldLabel type="email" textContent="Email address"/>
                <div ref={emailRef}>
                  <EditField type="email" changeCallBack={emailValidate} validateCss={emailClass}/>
                </div>
              </div>

              <div>
                  <EditFieldLabel type="password" textContent="Password" />

                <div ref={pwdRef}>
                  <EditField type="password" auto="current-password" />
                </div>
              </div>

              <div>
                <Button type="submit" textContent="Sign In" callBack={submitForm} />
              </div>
            </div>

            <span className="m-2 text-sm-red">
              {errorMessage}
            </span>

            <p className="text-sm">
              Not a member ? {' '}
              <Link to="/register" className="link-secondary">
                Register here
              </Link>
            </p>
          </div>
        </div>
        </div>
      }
    </>
  );
}

export default LoginPage;
