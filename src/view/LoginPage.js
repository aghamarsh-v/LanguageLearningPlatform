import React, {useState} from "react";
import EditField from "../widgets/EditField";
import EditFieldLabel from "../widgets/EditFieldLabel";
import Button from "../widgets/Button";
import Heading from "../widgets/Heading";

import {Navigate , Link } from "react-router-dom";

function randomlogin () {
  return Math.floor(Math.random() * 2)
}

function LoginPage () {
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

  const submitForm = () => {
    if (emailClass === "invalid-input") {
      setErrorMessage("Entered Invalid email id");
      return;
    }

    if (randomlogin()) {
      setErrorMessage("");
      setUser("abcd");
    } else {
      setErrorMessage("Entered invalid email id or password");
      setUser("");
    }
  };

  return (
    <>
      {user && <Navigate to="/langSelection" replace={true} />}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm-center">
          <Heading textContent="Sign in to your account" />
        </div>

        <div className="mt-10 sm-center">
          <div className="space-y-4">
            <div>
              <EditFieldLabel type="email" textContent="Email address"/>
              <EditField type="email" changeCallBack={emailValidate} validateCss={emailClass}/>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <EditFieldLabel type="password" textContent="Password" />

                <div className="text-sm">
                  <Link to="/" className="link-primary">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <EditField type="password" auto="current-password" />
            </div>

            <div>
              <Button type="submit" textContent="Sign In" callBack={submitForm} />
            </div>
          </div>

          <span className="m-2 text-sm-red">
            {errorMessage}
          </span>

          <p className="text-sm-grey">
            Not a member ? {' '}
            <Link to="/register" className="link-secondary">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
