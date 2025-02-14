export default function HeaderHelloWorld({
  name = "Rifqi",
  greeting = "Hallo",
  position = "CEO",
}) {
  return (
    <>
      <h1>
        {greeting} {name} {position}{" "}
      </h1>
    </>
  );
}
