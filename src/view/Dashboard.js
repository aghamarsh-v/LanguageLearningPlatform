import React, {useState} from "react";
import {Navigate } from "react-router-dom";
import Button from "../widgets/Button";
import LangDropDown from "../widgets/LangDropDown";
import logo from "../assets/logo.png"
import constants from '../constants/EndPoints'

export default function Dashboard () {
  const [username, setUserName] = useState();

  const logout = async () => {
    const res = await fetch(constants.logout);
    localStorage.clear();
  };
  
  setUserName(localStorage.getItem("username"));
  return (
    <>
    {username &&
      <div className="max-w-[90%] h-[90vh] mx-auto mt-[5vh] bg-gray-200	 rounded-xl shadow-lg items-center">
        <div className="py-4 lg:px-8 pt-8 mx-4 lg:mx-0">
          <div className="flex justify-between">
            <div>
              <img
                src={logo}
                className="max-h-12 pt-8 order-last"
                alt="SpeakEZ logo"
              />
            </div>

            <div className="">
              <LangDropDown />
            </div>
            <div className="">
              <Button type="submit" textContent="Logout" callBack={ () => {logout()}} />
            </div>
          </div>
        </div>
      </div>
    }
    { !username && <Navigate to="/login" replace="true" /> }
    </>
  )
}