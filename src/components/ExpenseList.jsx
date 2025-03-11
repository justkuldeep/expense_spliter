import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div style={styles.container}>
      <h2>📜 Expense List</h2>
      {expenses.length === 0 ? <p>No expenses added yet.</p> : (
        <ul style={styles.list}>
          {expenses.map((expense, index) => (
            <li key={index} style={styles.item}>
              <strong>{expense.name}</strong> - ₹{expense.amount} <br />
              <span>Each Person Pays: ₹{expense.perPerson}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    background: "#f8f9fa",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
};

export default ExpenseList;
