import React, { useState, useEffect } from "react";
import { Outlet, Link, useAsyncError } from "react-router-dom";
import EndPoints from "../constants/EndPoints";
import constants from "../constants/Global";

function LangDropDown() {
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

  const [selectedLang, setSelectedLang] = useState();

  function langSelectionCallback(info) {
    console.log(info);
    setSelectedLang(info);
  }

  return (
    <select name="lang" id="lang">
      {languages.map((lang, index) => {
        return (
            <option key={index} value={lang.countryCode} onClick={ () => { langSelectionCallback()} }>{lang.languageName}</option>
        );
      })}
    </select>
  );
}

export default LangDropDown;
