import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import "./topbar.scss";

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>admin-panel</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
