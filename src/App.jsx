import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  return (
    <div style={styles.container}>
      <h1>📊 Expense Splitter</h1>
      <ExpenseForm setExpenses={setExpenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    background: "#f0f2f5",
    minHeight: "100vh",
  },
};

export default App;
