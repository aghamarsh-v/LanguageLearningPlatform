import React, { useState, useEffect } from "react";
import {Navigate} from "react-router-dom";

import LanguageButton from "../widgets/LanguageButton";
import Heading from "../widgets/Heading";
import EndPoints from "../constants/EndPoints";
import constants from '../constants/Global';
import LoginRegistrationPageHeader from "../widgets/LoginRegisterHeader";

function LangSelectionView() {
    // fetch supported languages
    const [languages, setLanguages] = useState([]);

    const fetchSupportedLanguages = async () => {
        const res = await fetch(EndPoints.languageSelection,
        {
            headers: new Headers({
                "Authorization": `Basic ${constants.authKey}`
            })
        });
        
        const data = await res.json();
        setLanguages(data);
    };

    useEffect(() => {
        fetchSupportedLanguages();
    }, []);


    const [navToLogin, setNavToLogin] = useState();
    const [navToDashboard, setNavToDashboard] = useState();

    async function langSelectionCallback (info) {
        const username = localStorage.getItem("username");
        const userRole = "Basic";
        const res = await fetch(EndPoints.selectLang, {
            method: 'PUT',
            body: JSON.stringify({
                username,
                role: userRole,
                selectedLanguage: info
            }),
            headers: { 'Content-type': 'application/json' }
        });

        const data = res.json();
        console.log(data);
        if (data.status) {
            console.log("selectedLang: " + lang);
            localStorage.setItem("selectedLang", lang);
            setNavToDashboard(true);
        } else {
            console.log("selectedLang failed");
            localStorage.clear();
            setNavToLogin(true);
        }
    }

    return (
        <>
            {navToLogin && <Navigate to="/" replace="true"/>}
            {navToDashboard && <Navigate to="/home" userProfile={user} replace="true"/>}
            
            <div className="p-6 max-w-sm mx-auto mt-32 bg-white rounded-xl shadow-lg items-center">
                <div>
                    <LoginRegistrationPageHeader />
                </div>
                <div className=".sm-shadow-box">
                    <Heading textContent="Select a Language" />

                    <div className="lang-grid" >
                        {
                            languages.map((lang, index) => {
                                return (
                                    <LanguageButton key={index} country={lang.countryCode} langName={lang.languageName} cb={langSelectionCallback} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LangSelectionView;