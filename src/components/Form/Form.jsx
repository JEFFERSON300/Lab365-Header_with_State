import "./Form.css";
import { useRef } from "react";

function Form() {
  const apelidoInputElement = useRef();
  const idadeInputElement = useRef();
  const emailInputElement = useRef();
  const passwordInputElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (apelidoInputElement.current?.value == "") {
      window.alert("Faltou o seu apelido");
    }
    if (
      idadeInputElement.current?.value < 0 &&
      idadeInputElement.current?.value > 120
    ) {
      window.alert("Idade inválida");
    }
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        emailInputElement.current?.value
      )
    ) {
      window.alert("Email inválido");
    }
    if (passwordInputElement.current?.value < 8) {
      window.alert("Senha inválida");
    } else {
      const user = {
        apelido: apelidoInputElement.current?.value,
        idade: idadeInputElement.current?.value,
        email: emailInputElement.current?.value,
        password: passwordInputElement.current?.value,
      };

      localStorage.setItem(
        (localStorage.length + 1).toString(),
        JSON.stringify(user)
      );
    }
  };

  return (
    <div className="login">
      <div className="logincontainer">
        <h1>Tela de Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Apelido:
            <input
              ref={apelidoInputElement}
              type="text"
              id="apelido"
              placeholder="Digite seu apelido"
            />
          </label>

          <label htmlFor="">
            Idade:
            <input
              ref={idadeInputElement}
              type="number"
              id="credencial"
              placeholder="Digite sua idade"
            />
          </label>

          <label htmlFor="">
            E-mail:
            <input
              ref={emailInputElement}
              type="email"
              id="credencial"
              placeholder="Digite o seu e-mail"
            />
          </label>

          <label htmlFor="">
            Senha:
            <input
              ref={passwordInputElement}
              type="password"
              id="senha"
              placeholder="Digite sua senha"
            />
          </label>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
