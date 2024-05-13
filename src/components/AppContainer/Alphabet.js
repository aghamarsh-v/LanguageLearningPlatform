import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../Header/Header";

export default class Alphabet extends React.Component {

  render() {
    return (
      <div className="bg-orange-900 opacity-60 w-32 px-14 py-8 align-middle shadow-lg shadow-slate-100">
        <p className="text-white text-4xl">A</p>
        <p className="text-amber-300 text-2xl">a</p>
        <p className="text-cyan-500 text-xl">ah</p>
      </div>
    );
  }
}
