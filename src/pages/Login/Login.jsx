import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import InputText from "../../components/InputText/InputText";

function Login() {
  return (
    <div className="max-[1069px]:h-screen max-[1069px]:items-center max-[1069px]:gap-16 flex flex-col gap-32 max-w-2xl">
      <h2 className="text-evolution text-3xl font-semibold">Login</h2>
      <form className="max-[1069px]:p-14 max-[1069px]:rounded-xl max-[1069px]:bg-opacity-5 max-[1069px]:bg-evolution max-[1069px]:shadow-md flex flex-col gap-20">
        <fieldset className="flex flex-col gap-14">
          <InputText
            label="E-mail"
            placeholder="liasousa@email.com"
            id="email"
            type="email"
          />
          <InputText
            label="Senha"
            type="password"
            placeholder="liasousa123"
            id="password"
          />
        </fieldset>
        <div className="flex justify-around">
          <Link to="/app/home">
            <Button text="Entrar" type="button" />
          </Link>

          <Link to="signup">
            <Button text="Cadastrar" type="button" outline />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
