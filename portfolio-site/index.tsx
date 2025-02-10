import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", padding: "50px" }}>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a modern TypeScript portfolio using GitHub Workers.</p>
    </div>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
