import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegistrationPage from './RegistrationPage'
import LoginPage from './LoginPage'
import LangSelectionView from "./LangSelection";
import Dashboard from "./Dashboard";

export default function AppContainer () {
  const username = localStorage.getItem('username');
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={ username ? <Dashboard /> : <LoginPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/langSelection" element={<LangSelectionView />} />
        <Route path="/home" element={<Dashboard /> } />
    </Routes>
  </BrowserRouter>
  );
};