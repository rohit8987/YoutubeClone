import React, { useState } from "react";
import "./Header.css";

import MenuIcone from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import {Link}  from "react-router-dom";


function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcone />
        <Link to='/'>
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
        </Link>
      </div>

      <div className="header__input">
        <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputButton" />
        </Link>
      </div>
        <div className="header__icons">
        <VideoCallIcon className="header__icon" />
      <AppsIcon  className="header__icon"  />
      <NotificationsIcon  className="header__icon"  />
      <Avatar
        alt="Rohit Kumar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHwQBI84qshv0uCOvp941FPQ6tmhSUv8jVe6BmL5G&s"
      />
        </div>
    </div>
  );
}

export default Header;
