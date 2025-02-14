import { double, increment } from "../../utils/Multiply";
import ToDo from "./ToDo";

export default function ToDoList() {
  const toDoDatas = [
    { id: 1, iscompleted: false, text: "Learn HTMl", isDeleted: true },
    { id: 2, iscompleted: false, text: "Learn CSS" },
    { id: 3, iscompleted: true, text: "Learn JS" },
    { id: 4, iscompleted: false, text: "Learn React" },
    { id: 5, iscompleted: false, text: "Learn React" },
  ];

  const todos = toDoDatas.map((todo) => <ToDo {...todo} />);

  return (
    <ul>
      {/* {toDoDatas.map((todo) => (
        <ToDo
          key={todo.id}
          iscompleted={todo.iscompleted}
          text={todo.text}
          isDeleted={todo.isDeleted}
        />
      ))} */}
      {/* <Todo {...todos} /> */}
      {toDoDatas.map((todo) => (
        <ToDo {...todo} key={todo.id}/>
      ))}

    </ul>
  );
}
