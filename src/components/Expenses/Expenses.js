import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
function Expenses(proms) {
  return (
    <Card className="expenses">
      {/* <ExpenseItem props={props[0]}/>
        <ExpenseItem props={props[1]}/>
        <ExpenseItem props={props[2]}/>
        <ExpenseItem props={props[3]}/> */}
      <ExpenseItem
        title={proms.items[0].title}
        amount={proms.items[0].amount}
        date={proms.items[0].date}
      >
        {" "}
      </ExpenseItem>
      <ExpenseItem
        title={proms.items[1].title}
        amount={proms.items[1].amount}
        date={proms.items[1].date}
      >
        {" "}
      </ExpenseItem>
      <ExpenseItem
        title={proms.items[2].title}
        amount={proms.items[2].amount}
        date={proms.items[2].date}
      >
        {" "}
      </ExpenseItem>
      <ExpenseItem
        title={proms.items[3].title}
        amount={proms.items[3].amount}
        date={proms.items[3].date}
      >
        {" "}
      </ExpenseItem>
      {/* <div>{props.id}</div>
        <div>{props.title}</div>
        <div>{props.amount}</div>
        <div>{props.date}</div> */}
    </Card>
  );
}

export default Expenses;
