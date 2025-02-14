export default function ToDo({ iscompleted, text, isDeleted = false }) {
  if (isDeleted) {
    return null;
    //   } else if (iscompleted) {
    //     return (
    //       <li>
    //         <del>{text}</del>
    //       </li>
    //     );
    //   } else {
    //     return (
    //       <li>
    //         <p>{text}</p>
    //       </li>
    //     );
    //   }
  } else {
    return <li>{iscompleted ? <del>{text} {iscompleted && "Nice"}</del> : <p>{text} </p>}</li>;
  }
}
