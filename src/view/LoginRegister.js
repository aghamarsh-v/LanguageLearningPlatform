import React from "react";
import RegistrationPage from './RegistrationPage'
import LoginPage from './LoginPage'
import LangSelectionView from "./LangSelection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function LoginRegistrationPage () {
    return (
        <div className="p-6 max-w-sm mx-auto mt-32 bg-white rounded-xl shadow-lg items-centre ">
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
