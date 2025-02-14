import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./helloWorld";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);
