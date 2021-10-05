import "./ExpensesFilter.css";
const ExpenseFilter = (props) => {
  const dropChangeHandler = (event) => {
    //console.log(event.target.value);
    props.onChangeFilter(event.target.value); //from Expenses.js
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
