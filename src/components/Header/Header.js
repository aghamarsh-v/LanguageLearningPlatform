import React from "react";
import logo from "../../assets/logo.png";
import LangDropDown from "../LangDropDown/LangDropDown";
import Button from "../../widgets/Button";

export default class Header extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.state = {
      userName: "User",
    };
  }
  componentDidMount() {
    const user = localStorage.getItem("username");
    this.setState({ userName: user });
  }
  logout() {
    sessionStorage.removeItem("token");
    // AuthenticationService.logout();
  }
  render() {
    return (
      <div className="py-4 lg:px-8 pt-8 mx-4 lg:mx-0">
        <div className="flex justify-between">
          <img
            src={logo}
            className="max-h-12 pt-8 order-last"
            alt="SpeakEZ logo"
          />
          <div className="">
            <LangDropDown />
          </div>
          <div className="">
            <Button type="submit" textContent="Logout" callBack={this.logout} />
          </div>
        </div>
      </div>
    );
  }
}
