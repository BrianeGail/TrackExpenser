import { useState } from "react";
import "./App.css";
import ExpenseList from "./component/ExpenseList";
import ExpenseForm from "./component/ExpenseForm";
import TotalAmount from "./component/TotalAmount";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => setExpenses([...expenses, expense]);

  return (
    <div className="App bg-custom-orange" style={{ height: "100px" }}>
      <h1 className="text-4xl font-bold mb-4 text-center py-6 text-custom-text">
        Expense Tracker
      </h1>
      <ExpenseForm onAddExpense={addExpense} />
      <TotalAmount expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
