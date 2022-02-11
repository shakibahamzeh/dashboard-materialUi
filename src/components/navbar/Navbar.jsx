import React from 'react';
import "./navbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import avatarGirl from "../../assets/avatar-girl.jpg";

const Navbar=() => {
  return (
      <div className="navbar">
          <div className="navbarWrapper">
             <div className="navbarLeft">
                 <span className="logo">ADMIN PANEL</span>
             </div>
             <div className="navbarRight">
                 <div className="navbarIconsContainer">
                     <NotificationsNoneIcon/>
                     <span className="navIconBadge">2</span>
                 </div>
                  <div className="navbarIconsContainer">
                     <LanguageIcon/>
                     <span className="navIconBadge">1</span>
                 </div>
                  <div className="navbarIconsContainer">
                    <SettingsIcon/>
                 </div>
                 <img src={avatarGirl} alt="avatar" className="navAvatar"/>
             </div>
          </div>
      </div>
  )
}

export default Navbar;
