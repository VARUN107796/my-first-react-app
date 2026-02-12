import React, { useState } from "react";

function ThemeCard({ title }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const cardStyle = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center"
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <button onClick={toggleTheme}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeCard;