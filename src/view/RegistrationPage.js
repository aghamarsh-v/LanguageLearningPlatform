import React, {useState, useRef} from "react";
import { Link, Navigate} from "react-router-dom";

import Heading from "../widgets/Heading";
import EditField from "../widgets/EditField";
import EditFieldLabel from "../widgets/EditFieldLabel";
import Button from "../widgets/Button";
import constants from "../constants/EndPoints"
import LoginRegistrationPageHeader from "../widgets/LoginRegisterHeader";

function RegistrationPage() {
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

  const [pwdClass, setPwdClass] = useState('');
  const pwdValidate = (evt) => {
    const pwd_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (evt.target.value.match(pwd_regex)) {
      setPwdClass("valid-input");
    } else {
      setPwdClass("invalid-input");
    }
  }

  const [rePwdClass, setRePwdClass] = useState('');
  const retypePwdValidate = (evt) => {
    if (pwdClass === "valid-input" && pwdRef.current.childNodes[0].value === evt.target.value) {
      setRePwdClass("valid-input");
    } else {
      setRePwdClass("invalid-input");
    }
  }

  const [user, setUser] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const submitForm = async () => {
    if (emailClass === "invalid-input") {
      setErrorMessage("Entered Invalid email id");
      return;
    } else if (pwdClass === "invalid-input") {
      setErrorMessage("Password must contain at least:\none small character,\none large character,\none digit,\nshould be of minimum 8 characters");
      return;
    } else if (rePwdClass === "invalid-input") {
      setErrorMessage("Entered passwords are not the same");
      return;
    }

    const userInfo = btoa(emailRef.current.childNodes[0].value+':'+pwdRef.current.childNodes[0].value);
    const username = emailRef.current.childNodes[0].value;
    const res = await fetch(constants.register, {
      method: 'POST',
      body: JSON.stringify({userInfo}),
      headers: { 'Content-Type': 'application/json' }
    });
    const response = await res.json();
    if (response.status) {
      console.log(response);
      localStorage.setItem("username", username);
      setUser(username);
    } else {
      setErrorMessage("Error creating user");
      localStorage.clear();
      setUser();
    }
  };

  return (
    <>
    { user && <Navigate to="/login" message="Please enter credentials to login" /> }
    { !user && 
      <div className="p-6 max-w-sm mx-auto mt-32 bg-white rounded-xl shadow-lg items-center">
        <div>
          <LoginRegistrationPageHeader />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-centre px-6 py-6 lg:px-8">
          <div className="sm-center">
            <Heading textContent="Create an account" />
          </div>

          <div className="mt-10 sm-center">
            <div className="space-y-4">
              <div>
                <EditFieldLabel type="email" textContent="Email address" />
                <div ref={emailRef}>
                  <EditField type="email" changeCallBack={emailValidate} validateCss={emailClass} />
                </div>
              </div>

              <div>
                <EditFieldLabel type="password" textContent="Create Password"/>
                <div ref={pwdRef}>
                <EditField type="password" auto="current-password" changeCallBack={pwdValidate} validateCss={pwdClass}/>
                </div>
              </div>

              <div>
                <EditFieldLabel type="password" textContent="Retype Password" />
                <EditField type="password" id="password2" auto="current-password"  changeCallBack={retypePwdValidate} validateCss={rePwdClass}/>
              </div>

              <div>
                <Button type="submit" textContent="Sign Up" callBack={submitForm}/>
              </div>
            </div>
          </div>

          <span className="m-2 text-sm-red">
                {errorMessage}
          </span>

          <p className="text-sm"> Existing User ? {' '}
            <Link to="/" className="link-secondary">Sign in</Link>
          </p>
        </div>
      </div>
    }
    </>
  )
}

export default RegistrationPage;
