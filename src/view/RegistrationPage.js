import React from "react";
import TextBox from '../widgets/TextBox';
import { Outlet, Link } from "react-router-dom";

function RegistrationPage () {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-centre px-6 py-12 lg:px-8">
          <div className="sm:w-full sm:mx-auto sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
              Create an account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4" action="#" method="POST">
              <div>
                <label htmlFor="email" className="bold text-sm font-medium text-gray-900">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>

              <div>
                <label className="mt-10 bold text-sm font-medium text-gray-900">
                  Create Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-1.5 block w-full border-0 rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring:inset focus:ring-indigo-600 sm-text-sm"
                />
              </div>

              <div>
                <label className="mt-10 bold text-sm font-medium text-gray-900">
                  Retype Password
                </label>
                <input
                  name="password_reenter"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-1.5 block w-full border-0 rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring:inset focus:ring-indigo-600 sm-text-sm"
                />
              </div>

              <div>
                <button
                type="submit"
                className="mt-10 flex w-full justify-center rounded-md bg-indigo-700 p-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>


          </div>

          <p className="text-sm mt-10 text-center text-gray-500">
            Existing User ? {' '}
            <Link to="/" className="font-semibold text-indigo-600">Sign in</Link>
          </p>
        </div>
      </>
    )
}

export default RegistrationPage;
