import React from 'react';
import "./widgetLg.css";
import Joseph from "../../assets/Joseph.jpg";

const WidgetLg = () =>{
  const Button =({type})=>{
    return<button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
      <div className="widgetLg">
          <h3 className="widgetLgTitle">Latest transactions</h3>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src={Joseph} alt="avatar" className="widgetLgImg"/>
                <span className="widgetLgName">Joseph Gonzalez</span>
              </td>
              <td className="widgetLgDate">9 February 2022</td>
              <td className="widgetLgAmount">$ 122.00</td>
              <td className="widgetLgStatus">
                <Button type="Approved"/>
              </td>
            </tr>
             <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src={Joseph} alt="avatar" className="widgetLgImg"/>
                <span className="widgetLgName">Joseph Gonzalez</span>
              </td>
              <td className="widgetLgDate">9 February 2022</td>
              <td className="widgetLgAmount">$ 122.00</td>
              <td className="widgetLgStatus">
                <Button type="Declined"/>
              </td>
            </tr>
             <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src={Joseph} alt="avatar" className="widgetLgImg"/>
                <span className="widgetLgName">Joseph Gonzalez</span>
              </td>
              <td className="widgetLgDate">9 February 2022</td>
              <td className="widgetLgAmount">$ 122.00</td>
              <td className="widgetLgStatus">
                <Button type="pending"/>
              </td>
            </tr>
             <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src={Joseph} alt="avatar" className="widgetLgImg"/>
                <span className="widgetLgName">Joseph Gonzalez</span>
              </td>
              <td className="widgetLgDate">9 February 2022</td>
              <td className="widgetLgAmount">$ 122.00</td>
              <td className="widgetLgStatus">
                <Button type="Approved"/>
              </td>
            </tr>
          </table>
      </div>
  )
}

export default WidgetLg;
