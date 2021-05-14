import React from "react";
import { Link } from "react-router-dom";
import { HeaderBar, MainIcon } from "./HeaderElements";

const Header = () => {
  return (
    <HeaderBar>
      <Link to="/">
        <MainIcon size={50} />
      </Link>
    </HeaderBar>
  );
};

export default Header;
