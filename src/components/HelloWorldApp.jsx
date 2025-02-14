import FooterHelloWorld from "./FooterHelloWorld";
import HeaderHelloWorld from "./HeaderHelloWorld";

export default function HelloWorldApp({ children }) {
  const props = {
    greeting: "Hai",
    name: "Rifqi Muzakki",
    position: "President",
  };
  return (
    <>
      <HeaderHelloWorld {...props} />
      {children}
      <FooterHelloWorld />
    </>
  );
}
