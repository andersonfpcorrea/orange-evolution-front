import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppContext from "../../context/context";
import InputText from "../../components/InputText/InputText";
import InputSelect from "../../components/InputSelect/InputSelect";
import ButtonRounded from "../../components/ButtonRounded/ButtonRounded";
import Loading from "../../components/Loading/Loading";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    roadmaps: { roadmaps },
    setUser,
  } = useContext(AppContext);

  const handleSubmit = (e) => {
    if (loading) return null;
    e.preventDefault();
    const data = Object.fromEntries([...new FormData(e.target)]);
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_URL}/signup`,
        {
          ...data,
        }
      )
      .then((res) => {
        setUser(res.data);
        navigate("/test");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
    return null;
  };

  return (
    <div className="flex flex-col gap-14 max-w-2xl min-[1360px]:pl-[6vw] min-[1360px]:max-w-[55vw] relative">
      <Loading
        className={`${
          loading ? "absolute" : "hidden"
        } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      />
      <h2 className="text-evolution text-3xl font-semibold">Crie sua conta</h2>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <InputText
          label="Primeiro nome"
          name="firstName"
          placeholder="Lia"
          id="firstName"
          type="text"
          required
          min={1}
        />
        <InputText
          label="Sobrenome"
          name="lastName"
          placeholder="Sousa"
          id="lastName"
          type="text"
          required
          min={1}
        />
        <InputText
          label="E-mail"
          name="email"
          placeholder="liasousa@email.com"
          id="email"
          type="email"
          required
        />
        <InputText
          label="Senha"
          name="password"
          type="password"
          placeholder="liasousa123"
          id="password"
          required
          min={6}
        />
        <InputSelect
          label="Sua trilha"
          name="roadmap"
          id="roadmaps"
          defaultOption="Desenvolvimento Full Stack"
          key={roadmaps.id}
          options={roadmaps}
          required
        />

        <div className="flex justify-end p-2">
          <ButtonRounded type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Signup;
