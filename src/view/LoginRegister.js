import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from './RegistrationPage'
import LoginPage from './LoginPage'

function LoginRegistrationPage () {
    return (
        <>
        <div className="p-6 max-w-sm mx-auto mt-32 bg-white rounded-xl shadow-lg items-centre ">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/register" element={<RegistrationPage />} />
                </Routes>
            </BrowserRouter>
        </div>
        </>
    );
}

export default LoginRegistrationPage;
