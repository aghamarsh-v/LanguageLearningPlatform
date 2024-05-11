import React, { useState, useEffect } from "react";
import { Outlet, Link, useAsyncError } from "react-router-dom";

import LanguageButton from "../widgets/LanguageButton";
import Heading from "../widgets/Heading";
import EndPoints from "../constants/EndPoints";


function langSelectionCallback(info) {
    console.log(info);
}

function LangSelectionView() {
    const langCountryMap = {
        Spanish: 'ES',
        French: 'FR'
    };

    // fetch supported languages
    const [languages, setLanguages] = useState([]);

    const fetchSupportedLanguages = () => {
        return fetch(EndPoints.languageSelection, { mode: 'no-cors' })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((d) => {
                console.log(d);
                setLanguages(d);
            });
    };

    useEffect(() => {
        fetchSupportedLanguages();
    }, []);

    return (
        <div className=".sm-shadow-box">
            <Heading textContent="Select Language" />

            <div className="lang-grid" >
                {
                    languages.map((lang, index) => {
                        return (
                            <LanguageButton key ={index} country={langCountryMap[lang]} langName={lang} cb={langSelectionCallback} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LangSelectionView;