import React from "react";
import "./widgetLg.scss";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className='widgetLg'>
      <h2 className='widgetLgTitle'>Latest Transactions</h2>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='/images/proxy-image.jpeg'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Carmen Sanders</span>
          </td>
          <td className='widgetLgDate'>8 July 2022</td>
          <td className='widgetLgAmount'>8 $157.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved'></Button>
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='/images/proxy-image.jpeg'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Carmen Sanders</span>
          </td>
          <td className='widgetLgDate'>8 July 2022</td>
          <td className='widgetLgAmount'>8 $157.00</td>
          <td className='widgetLgStatus'>
            <Button type='Declined'></Button>
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='/images/proxy-image.jpeg'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Carmen Sanders</span>
          </td>
          <td className='widgetLgDate'>8 July 2022</td>
          <td className='widgetLgAmount'>8 $157.00</td>
          <td className='widgetLgStatus'>
            <Button type='Pending'></Button>
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='/images/proxy-image.jpeg'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Carmen Sanders</span>
          </td>
          <td className='widgetLgDate'>8 July 2022</td>
          <td className='widgetLgAmount'>8 $157.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved'></Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
