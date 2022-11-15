import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../context/context";
import Button from "../../components/Button/Button";
import InputText from "../../components/InputText/InputText";

const { REACT_APP_PROTOCOL: PROTOCOL, REACT_APP_URL: URL } = process.env;

function Login() {
  const navigate = useNavigate();
  const { setToken, setUser } = useContext(AppContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries([...new FormData(e.target)]);

    axios
      .post(`${PROTOCOL}://${URL}/login`, {
        email,
        password,
      })
      .then((res) => {
        setToken(res.data.token);
        setUser(res.data.user);
        navigate("/app/home");
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.error(err);
        setError(err.response.data.message);
      });
  };

  return (
    <div className="max-[1069px]:h-screen max-[1069px]:items-center max-[1069px]:gap-16 flex flex-col gap-32 max-w-2xl">
      <h2 className="text-evolution text-3xl font-semibold">Login</h2>
      <form
        className="max-[1069px]:p-14 max-[1069px]:rounded-xl max-[1069px]:bg-opacity-5 max-[1069px]:bg-evolution max-[1069px]:shadow-md flex flex-col gap-20"
        onSubmit={handleSubmit}
      >
        <fieldset className="flex flex-col gap-14 relative">
          <InputText
            label="Email"
            placeholder="liasousa@email.com"
            id="email"
            type="email"
            required
            name="email"
            onChange={() => setError("")}
          />
          <InputText
            label="Senha"
            type="password"
            placeholder="liasousa123"
            id="password"
            required
            name="password"
            onChange={() => setError("")}
          />
          <span
            className={`${
              error ? "" : "hidden"
            } absolute top-[105%] right-6 text-red-600 italic`}
          >
            {error}
          </span>
        </fieldset>
        <div className="flex justify-around">
          {/* <Link to="/app/home"> */}
          <Button text="Entrar" type="submit" />
          {/* </Link> */}

          <Link to="signup">
            <Button text="Cadastrar" type="Button" outline />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
