import "./Card.css";

function Card() {
  var arr = [...Array(localStorage.length)].map((item, index) => index + 1);
  const users = arr.map((x) => JSON.parse(localStorage.getItem(x.toString())));

  console.log(users[0]);
  //const user = JSON.parse(localStorage.getItem(arr[2].toString()));

  const userNotEmpty = (user) => {
    return (
      <div className="card">
        <li>
          apelido:
          {user.apelido}
        </li>
        <li>
          idade:
          {user.idade}
        </li>
        <li>
          email:
          {user.email}
        </li>
        <li>
          password:
          {user.password}
        </li>
      </div>
    );
  };

  const userEmpty = () => {
    return <li>Não há nenhum usuário</li>;
  };

  return (
    <div>
      <ul className="bullet">
        {localStorage.length > 0 ? users.map(userNotEmpty) : userEmpty()}
      </ul>
    </div>
  );
}

export default Card;
