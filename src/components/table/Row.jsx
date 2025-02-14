let counter = 0;

export default function Row({ text, id = 0 }) {
  counter++;
  console.log(counter);

  return (
    <tr>
      {/* <td>{counter}</td> */}
      <td>{id}</td>
      <td>{text}</td>
    </tr>
  );
}
