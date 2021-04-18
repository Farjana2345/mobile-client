import React from 'react';

const Orders = (props) => {
    const{title,price,date,name,email}=props.lists;
    return (
      <tr>
               
      <td>{title}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{email}</td>
      <td>{date}</td>
      
      
  </tr>   
    );
};

export default Orders;