import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //  const [title, setTitle] = useState(props.title);
  // console.log("TITLE evaluated by React");

  //  const clickHandler = () => {
  //    setTitle("Updated Title");
  //    console.log("Updated Title>>" + title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
