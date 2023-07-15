import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Header() {
  const [name, setName] = useState("Nothing");

  const handleName = () => {
    setName(prompt("Qual é o seu Nome?"));
  };
  return (
    <nav onClick={handleName} className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{name}</span>
      </div>
    </nav>
  );
}

export default Header;
