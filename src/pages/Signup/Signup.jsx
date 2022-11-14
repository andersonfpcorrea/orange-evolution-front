import PropTypes from "prop-types";
import { useContext } from "react";
import AppContext from "../../context/context";
import InputText from "../../components/InputText/InputText";
import InputSelect from "../../components/InputSelect/InputSelect";
import ButtonRounded from "../../components/ButtonRounded/ButtonRounded";

function Signup({ callback }) {
  const {
    roadmaps: { roadmaps },
  } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-14 max-w-2xl">
      <h2 className="text-evolution text-3xl font-semibold">Crie sua conta</h2>
      <form className="flex flex-col gap-10">
        <InputText label="Nome" placeholder="Lia Sousa" id="name" type="text" />
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
        <InputSelect
          label="Sua trilha"
          id={roadmaps.title}
          defaultOption={roadmaps[0].title}
          key={roadmaps.id}
          options={roadmaps}
        />

        <div className="flex justify-end p-2">
          <ButtonRounded type="submit" onClick={callback} />
        </div>
      </form>
    </div>
  );
}

Signup.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Signup;
