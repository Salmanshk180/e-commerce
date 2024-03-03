import React from "react";
import DarkNavbar from "../../components/navbars/dark-navbar/DarkNavbar";
import LightNavbar from "../../components/navbars/light-navbar/LightNavbar";

const Header = () => {
  return (
    <React.Fragment>
      <DarkNavbar background_color="rgb(5, 26, 71)" />
      <LightNavbar/>
    </React.Fragment>
  );
};

export default Header;
