import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorldApp from "./HelloWorldApp";
import BodyHelloWorld from "./BodyHelloWorld";
import ToDoList from "./todo/ToDoList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorldApp>
        <BodyHelloWorld/>
        <ToDoList/>
    </HelloWorldApp>
  </StrictMode>
);
