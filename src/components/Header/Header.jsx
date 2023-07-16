import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";

function Header() {
  const [name, setName] = useState("Nothing");

  const handleName = () => {
    setName(prompt("Qual é o seu Nome?"));
  };
  return (
    <div>
      <nav onClick={handleName} className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{name}</span>
        </div>
      </nav>

      <Form />
      <div className="border d-flex align-items-center justify-content-center">
        <Link to={"/usuarios"}>Lista de Usuários</Link>
      </div>
    </div>
  );
}

export default Header;
