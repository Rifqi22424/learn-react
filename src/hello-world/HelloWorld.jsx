function HelloWorld() {
  const text = "Hello World from text";
  const style = {
    color: "blue",
    backgroundColor: "aqua",
  };

  return (
    <>
      <h1
        style={style}
        // Inline CSS

        // style={{
        //   backgroundColor: "red",
        //   color: "yellow",
        // }}
      >
        {text.toUpperCase()}
      </h1>
    </>
  );
}

export default HelloWorld;
