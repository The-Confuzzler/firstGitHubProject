import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
    // const expenseDate  = Date(2021, 8, 24);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
   
    const clickHandler = () => {setTitle("Updated!");};
   
  return (
      //the top div is called a wrapping div
    <Card className='expense-item'>
     <ExpenseDate date={props.date} year={props.year} month={props.year}/>
     {/* {ExpenseDate(props)} */}
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
