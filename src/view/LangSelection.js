import React, { useState, useEffect } from "react";
import { Outlet, Link, useAsyncError } from "react-router-dom";

import LanguageButton from "../widgets/LanguageButton";
import Heading from "../widgets/Heading";
import EndPoints from "../constants/EndPoints";
import constants from '../constants/Global';


function LangSelectionView() {
    // fetch supported languages
    const [languages, setLanguages] = useState([]);

    const fetchSupportedLanguages = () => {
        return fetch(EndPoints.languageSelection, {headers:{Authorization:constants.authKey}})
            .then((res) => {
                return res.json();
            })
            .then((d) => {
                setLanguages(d);
            });
    };

    useEffect(() => {
        fetchSupportedLanguages();
    }, []);

    const [selectedLang, setSelectedLang] = useState();
    function langSelectionCallback(info) {
        console.log(info);
        setSelectedLang(info);
    }

    return (
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
    )
}

export default LangSelectionView;