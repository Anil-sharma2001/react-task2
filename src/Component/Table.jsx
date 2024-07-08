import React, { useState } from 'react';
import { data as initialData } from './Data'; // Import the initial data from a separate file
import './Table.css'; // Import the CSS file
import Arrow from './arrow.png';

export default function Table() {
  const [dataValue, setDataValue] = useState('');
  const [data, setData] = useState(initialData);
  const [order, setOrder] = useState('ASC');
  const [img , setImg ]=useState({
    Customer: false,
    last_seen: false,
    total_spent: false,
    latest_purchase: false,
    news: false,
    segment: false,

  })


  const handleChange = (e) => {
    e.preventDefault();
    setDataValue(e.target.value);
  };

  const handleClick = (col) => {

    const sorted = [...data].sort((a, b) => {
        console.log('this is ',a,'this is b',b)
      if (order === 'ASC') {
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      } else {
        return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
      }
    });
    setData(sorted);
    setOrder(order === 'ASC' ? 'DESC' : 'ASC');
    setImg({ ...img, [col]: !img[col] })
  };

  return (
    <div className='component'>
      <div>
        <input
          type='text'
          placeholder='Enter Value'
          value={dataValue}
          onChange={handleChange}
        />
      </div>
      <table className='customer-table'>
        <thead>
          <tr>
            <th onClick={() => handleClick('Customer')} >Customer{img.Customer && <img  src={Arrow}></img> }</th>
            <th onClick={() => handleClick('last_seen')}>Last Seen{img.last_seen && <img src={Arrow}></img> }</th>
            <th>Orders</th>
            <th onClick={() => handleClick('total_spent')}>Total Spent{img.total_spent && <img src={Arrow}></img> }</th>
            <th onClick={() => handleClick('latest_purchase')}>Latest Purchase{img.latest_purchase && <img src={Arrow}></img> }</th>
            <th onClick={() => handleClick('news')}>News{img.news && <img src={Arrow}></img> }</th>
            <th onClick={() => handleClick('segment')}>Segments{img.segment && <img src={Arrow}></img> }</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((e) => {
              const dataValueLower = dataValue.toLowerCase();
              return (
                dataValueLower === '' ||
                e.Customer.toLowerCase().includes(dataValueLower) ||
                e.last_seen.includes(dataValue) ||
                e.order.toString().includes(dataValue) ||
                e.total_spent.toString().includes(dataValue) ||
                e.news.toLowerCase().includes(dataValueLower) ||
                e.segment.toLowerCase().includes(dataValueLower)
              );
            })
            .map((item) => (
              <tr key={item.id}>
                <td>{item.Customer}</td>
                <td>{item.last_seen}</td>
                <td>{item.order}</td>
                <td>{item.total_spent}</td>
                <td>{item.latest_purchase}</td>
                <td>{item.news}</td>
                <td>{item.segment}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
