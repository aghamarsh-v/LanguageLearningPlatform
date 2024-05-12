import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegistrationPage from './RegistrationPage'
import LoginPage from './LoginPage'
import LangSelectionView from "./LangSelection";
import logo from '../assets/logo.png';

function LoginRegistrationPage () {
    return (
        <div className="p-6 max-w-sm mx-auto mt-32 bg-white rounded-xl shadow-lg items-center">
            <div className="flex items-center justify-center">
                <img src={logo} className="max-h-12 justify-center max-w-auto" alt="SpeakEZ logo"/>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/langSelection" element={<LangSelectionView />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default LoginRegistrationPage;
