import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>WhatsApp Expense Splitter</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#4CAF50",
    color: "white",
    textAlign: "center",
    padding: "10px 0",
  },
};

export default Header;
