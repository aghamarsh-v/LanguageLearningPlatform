import React from "react";
import "./App.css";
import useToken from "./utils/useToken";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./components/AppContainer/AppContainer";
import wall from "./assets/background.jpg"; // Do not remove. Needed to import background as prod asset
import LoginRegistrationPage from "./view/LoginRegister";

function App() {
  const { token, setToken } = useToken();
  const dummy = wall;
  if(!token) { // changeit - remove false
    return <LoginRegistrationPage setToken={setToken} />
  }
  return (
    <React.Fragment>
      <Router>
        <AppContainer />
      </Router>
    </React.Fragment>
  );
}

export default App;
