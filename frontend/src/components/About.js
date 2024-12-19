import React from "react";

function About() {
  return (
    <div
      style={{
        backgroundColor: "#fef6e4",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "375px",
          height: "667px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundImage: "url('/image.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginBottom: "20px",
          }}
        ></div>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          Plan Your Day In Details
        </h1>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "30px" }}>
          There Are Many Variations Of Passages
        </p>
        <button
          style={{
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            border: "none",
            cursor: "pointer",
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}

export default About;
