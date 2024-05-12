import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../Header/Header";

export default class AppContainer extends React.Component {
  componentDidMount() {}

  render() {
    const isUserLoggedIn = true; //to be removed - AuthenticationService.isUserLoggedIn();
    return (
      <div className="max-w-[90%] h-[90vh] mx-auto mt-[5vh] bg-gray-200	 rounded-xl shadow-lg items-center">
        <Header class="max-h-12 justify-center max-w-auto"></Header>
      </div>
    );
  }
}
