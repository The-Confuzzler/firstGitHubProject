import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "./Card";
function ExpenseItem(props) {
    // const expenseDate  = Date(2021, 8, 24);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
   
  return (
      //the top div is called a wrapping div
    <card className='expense-item'>
     <ExpenseDate date={props.date} year={props.year} month={props.year}/>
     {/* {ExpenseDate(props)} */}
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </card>
  );
}

export default ExpenseItem;
