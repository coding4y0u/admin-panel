import { Visibility } from "@mui/icons-material";
import React from "react";
import "./widgetSm.scss";

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img src='/images/proxy-image.jpeg' alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Marie Sophia</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/proxy-image.jpeg' alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Marie Sophia</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/proxy-image.jpeg' alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Marie Sophia</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/proxy-image.jpeg' alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Marie Sophia</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='/images/proxy-image.jpeg' alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Marie Sophia</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
