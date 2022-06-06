import {
  AttachMoney,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
  BarChart,
} from "@mui/icons-material";
import React from "react";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarItem active'>
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className='sidebarItem'>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarItem'>
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarItem active'>
              <PermIdentity className='sidebarIcon' />
              Users
            </li>
            <li className='sidebarItem'>
              <Storefront className='siedbarIcon' />
              Products
            </li>
            <li className='sidebarItem'>
              <AttachMoney className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarItem'>
              <BarChart className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarItem active'>
              <MailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarItem'>
              <DynamicFeed className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarItem'>
              <ChatBubbleOutline className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarItem active'>
              <WorkOutline className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarItem'>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarItem'>
              <Report className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
