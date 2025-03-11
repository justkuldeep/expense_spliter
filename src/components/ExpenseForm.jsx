import React, { useState } from "react";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({ name: "", amount: "", participants: "" });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const perPerson = (expense.amount / expense.participants.split(",").length).toFixed(2);

    setExpenses((prev) => [...prev, { ...expense, perPerson }]);

    setExpense({ name: "", amount: "", participants: "" });
  };

  return (
    <div style={styles.container}>
      <h2>💰 Add an Expense</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Expense Name" value={expense.name} onChange={handleChange} required style={styles.input} />
        <input type="number" name="amount" placeholder="Total Amount (₹)" value={expense.amount} onChange={handleChange} required style={styles.input} />
        <input type="text" name="participants" placeholder="WhatsApp Numbers (comma-separated)" value={expense.participants} onChange={handleChange} required style={styles.input} />
        <button type="submit" style={styles.button}>💸 Split Now</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    background: "#007bff",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
  },
};

export default ExpenseForm;
