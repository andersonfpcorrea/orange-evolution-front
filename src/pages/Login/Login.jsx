import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import InputText from "../../components/InputText/InputText";

function Login({ callback }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-32 max-w-2xl">
      <h2 className="text-evolution text-3xl font-semibold">Login</h2>
      <form className="flex flex-col gap-20">
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
