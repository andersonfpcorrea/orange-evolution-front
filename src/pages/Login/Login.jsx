import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import InputText from "../../components/InputText/InputText";

function Login({ callback }) {
  const navigate = useNavigate();

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
          <Button text="Entrar" type="submit" onClick={() => navigate("/")} />
          <Button text="Cadastrar" type="submit" outline onClick={callback} />
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Login;
