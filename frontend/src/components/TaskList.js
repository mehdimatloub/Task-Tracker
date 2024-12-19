import React from "react";
import WorkIcon from "../assets/Work.svg";
import HeartIcon from "../assets/Heart.svg";

function TaskList() {
  const categories = [
    { name: "Work", icon: WorkIcon, tasks: 3 },
    { name: "Habits", icon: HeartIcon, tasks: 4 },
  ];

  const tasks = ["Email Check", "Weekly Meeting", "Team Discussion"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fef6e4",
      }}
    >
      <div style={{ width: "375px", padding: "20px", backgroundColor: "#fff", borderRadius: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1>Task List</h1>
          <button style={{ border: "none", backgroundColor: "transparent", fontSize: "24px" }}>☰</button>
        </header>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {categories.map((category, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f8f9fa",
                padding: "10px",
                borderRadius: "8px",
                textAlign: "center",
                flex: "1",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <img src={category.icon} alt={category.name} style={{ width: "40px", marginBottom: "10px" }} />
              <h4>{category.name}</h4>
              <p>{`+${category.tasks} tasks`}</p>
            </div>
          ))}
        </div>

        {tasks.map((task, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <input type="checkbox" style={{ marginRight: "10px" }} />
            <p>{task}</p>
          </div>
        ))}
        <button
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            marginTop: "20px",
            width: "100%",
          }}
        >
          End All Tasks
        </button>
      </div>
    </div>
  );
}

export default TaskList;
