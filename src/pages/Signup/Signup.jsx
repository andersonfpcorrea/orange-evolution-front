import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/context";
import InputText from "../../components/InputText/InputText";
import InputSelect from "../../components/InputSelect/InputSelect";
import ButtonRounded from "../../components/ButtonRounded/ButtonRounded";

function Signup() {
  const {
    roadmaps: { roadmaps },
  } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-14 max-w-2xl min-[1360px]:pl-[6vw] min-[1360px]:max-w-[55vw]">
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
          id="roadmaps"
          defaultOption="Desenvolvimento Full Stack"
          key={roadmaps.id}
          options={roadmaps}
        />

        <div className="flex justify-end p-2">
          <Link to="/test">
            <ButtonRounded type="button" />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
