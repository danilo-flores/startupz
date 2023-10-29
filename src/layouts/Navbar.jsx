import Logo from "../components/Logo";
import Button from "../components/Button";

export default function Navbar() {
  return (
    <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 w-full p-6 z-10">
      <Logo />

      <div className="flex flex-col md:flex-row justify-center items-center text-lg">
        <a href="/" className="p-3 mx-1 md:mx-3">Startups</a>
        <a href="/" className="p-3 mx-1 md:mx-3">Contact</a>

        <Button className="mx-1 md:mx-3">Work with us!</Button>
      </div>
    </div>
  );
};
