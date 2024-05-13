import React from "react";
import logo from '../assets/logo.png';

function LoginRegistrationPageHeader () {
    return (
            <div className="flex items-center justify-center">
                <img src={logo} className="max-h-12 justify-center max-w-auto" alt="SpeakEZ logo"/>
            </div>
    );
}

export default LoginRegistrationPageHeader;
