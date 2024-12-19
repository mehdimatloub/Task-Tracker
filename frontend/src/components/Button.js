import React from "react";
import PlusIcon from "./assets/Plus.svg";

function AddButton() {
  return (
    <button style={{ display: "flex", alignItems: "center", backgroundColor: "#fff", border: "none", borderRadius: "12px", padding: "10px" }}>
      <img src={PlusIcon} alt="Add Icon" style={{ width: "24px", marginRight: "8px" }} />
      Add Task
    </button>
  );
}

export default AddButton;
