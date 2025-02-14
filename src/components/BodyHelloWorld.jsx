import { useState } from "react";
import "../styles/global.css";
import { double, increment } from "../utils/Multiply";
import Table from "./table/Table";
import MyButton from "./button/MyButton";
import MyDraggable from "./draggable/MyDraggable";
import Propagation from "./button/propagation";

export default function BodyHelloWorld() {
  const [doubleResult, setDoubleResult] = useState(0);
  const [IncrementResult, setIncrementResult] = useState(0);

  function handleClick() {
    alert("Hallo gaes");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <p className="title">nama saya rifqi</p>
        <p className="content">dan saya sangat keren</p>
      </div>
      <button onClick={() => setDoubleResult(double(1))}>Double by two</button>
      <button onClick={() => setIncrementResult(increment(1))}>
        Increment by two
      </button>

      <p>{doubleResult}</p>
      <p>{IncrementResult}</p>

      <button onClick={handleClick}>Alert Function</button>

      <MyButton onSmash={() => alert("You smashed me")} text="Button" />

      <Table />

      <MyDraggable />

      <Propagation
        onClick={(e) => {
          e.stopPropagation();
          alert("Into Button");
        }}
      />
    </>
  );
}
