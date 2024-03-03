import React from "react";
import DarkNavbar from "../../components/navbars/dark-navbar/DarkNavbar";
import LightNavbar from "../../components/navbars/light-navbar/LightNavbar";
import ShopHeader from "../../components/shop-header/ShopHeader";

const Header = () => {
  return (
    <React.Fragment>
      <DarkNavbar background_color="rgb(5, 26, 71)" />
      <LightNavbar/>
      <ShopHeader/>
    </React.Fragment>
  );
};

export default Header;
