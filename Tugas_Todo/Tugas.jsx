import React from "react";
import "../src/App.css";

function Tugas(props) {
  const { id, title, description, completed } = props.tugas;

  return (
    <div className={`tugas ${completed ? "completed" : ""}`}>
      <input
        style={{ cursor: "pointer", width: "50px", height: "50px", position: "relative", right: "-350px", bottom: "-35px" }}
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChange(id)}
      />
      <div>
        <h3 style={{alignContent: "center", justifyContent: "center", position: "relative", bottom: "35px", fontSize: "25px"}}>{title}</h3>
        <p style={{alignContent: "center", justifyContent: "center", position: "relative", bottom: "25px", fontSize: "15px"}}>{description}</p>
      </div>
    </div>
  );
}

export default Tugas;
