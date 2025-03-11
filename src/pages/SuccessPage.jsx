import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message || "Expense Split Successfully!";

  const fadeIn = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: 100,
  });

  return (
    <animated.div style={{ ...styles.container, ...fadeIn }}>
      <h2>✅ Success!</h2>
      <p style={styles.message}>{message}</p>
      <button onClick={() => navigate("/")} style={styles.button}>➕ Add Another Expense</button>
    </animated.div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    margin: "40px auto",
  },
  message: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    background: "#28a745",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
};

export default SuccessPage;
