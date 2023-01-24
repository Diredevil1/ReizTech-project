import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./organisms/App/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="px-20 bg-indigo-900 min-h-screen">
      <App />
    </div>
  </React.StrictMode>
);
