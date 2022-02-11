import React from 'react';
import "./widgetSm.css";
import anna from "../../assets/Anna.jpg";
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm =() => {
  return (
      <div className="widgetSm">
          <span className="widgetSmTitle">New Join Members</span>
          <ul className="widgetSmList">
              <li className="widgetSmListItem">
                  <img src={anna} alt="anna" className="widgetSmImg"/>
                  <div className="widgetSmUser">
                      <span className="widgetSmUserName">Anna Keller</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmBtn">
                      <VisibilityIcon className="widgetSmIcon"/>
                      Display
                  </button>

              </li>
          </ul>
           <ul className="widgetSmList">
              <li className="widgetSmListItem">
                  <img src={anna} alt="anna" className="widgetSmImg"/>
                  <div className="widgetSmUser">
                      <span className="widgetSmUserName">Anna Keller</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmBtn">
                      <VisibilityIcon className="widgetSmIcon"/>
                      Display
                  </button>

              </li>
          </ul>
           <ul className="widgetSmList">
              <li className="widgetSmListItem">
                  <img src={anna} alt="anna" className="widgetSmImg"/>
                  <div className="widgetSmUser">
                      <span className="widgetSmUserName">Anna Keller</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmBtn">
                      <VisibilityIcon className="widgetSmIcon"/>
                      Display
                  </button>

              </li>
          </ul>
           <ul className="widgetSmList">
              <li className="widgetSmListItem">
                  <img src={anna} alt="anna" className="widgetSmImg"/>
                  <div className="widgetSmUser">
                      <span className="widgetSmUserName">Anna Keller</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmBtn">
                      <VisibilityIcon className="widgetSmIcon"/>
                      Display
                  </button>

              </li>
          </ul>
           <ul className="widgetSmList">
              <li className="widgetSmListItem">
                  <img src={anna} alt="anna" className="widgetSmImg"/>
                  <div className="widgetSmUser">
                      <span className="widgetSmUserName">Anna Keller</span>
                      <span className="widgetSmUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmBtn">
                      <VisibilityIcon className="widgetSmIcon"/>
                      Display
                  </button>

              </li>
          </ul>
      </div>
  )
}

export default WidgetSm;
