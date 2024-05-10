import React from "react";
import Heading from "../widgets/Heading";
import EditField from "../widgets/EditField";
import EditFieldLabel from "../widgets/EditFieldLabel";
import Button from "../widgets/Button";
import { Link } from "react-router-dom";

function RegistrationPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-centre px-6 py-12 lg:px-8">
      <div className="sm-center">
        <Heading textContent="Create an account" />
      </div>

      <div className="mt-10 sm-center">
        <div className="space-y-4">
          <div>
            <EditFieldLabel type="email" textContent="Email address" />
            <EditField type="email" />
          </div>

          <div>
            <EditFieldLabel type="password" textContent="Create Password"/>
            <EditField type="password" auto="current-password" />
          </div>

          <div>
            <EditFieldLabel type="password" textContent="Retype Password" />
            <EditField type="password" id="password2" auto="current-password" />
          </div>

          <div>
            <Button type="submit">
              <Link to="/langSelection"> Sign Up </Link>
            </Button>
          </div>
        </div>
      </div>

      <p className="text-sm-grey"> Existing User ? {' '}
        <Link to="/" className="link-secondary">Sign in</Link>
      </p>
    </div>
  )
}

export default RegistrationPage;
