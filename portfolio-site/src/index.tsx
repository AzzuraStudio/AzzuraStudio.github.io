import React from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <div style={{ textAlign: "center", padding: "50px" }}>
    <h1>Welcome to My Portfolio 🚀</h1>
    <p>A modern TypeScript portfolio using ShadCN UI and GitHub Pages.</p>
  </div>
);

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
