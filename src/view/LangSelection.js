import React from "react";
import LanguageButton from "../widgets/LanguageButton";
import Heading from "../widgets/Heading";

import { Outlet, Link } from "react-router-dom";

function langSelectionCallback (info) {
    console.log(info);
}

function LangSelectionView () {
    return (
        <div className=".sm-shadow-box">
            <Heading textContent="Select Language"/>

            <div className="lang-grid" >
            <LanguageButton country="ES" langName="Spanish" cb={langSelectionCallback}/>
            <LanguageButton country="FR" langName="French" cb={langSelectionCallback}/>
            <LanguageButton country="IN" langName="Hindi" cb={langSelectionCallback}/>
            <LanguageButton country="LK" langName="Simhala" cb={langSelectionCallback}/>
            </div>
        </div>
    )
}

export default LangSelectionView;