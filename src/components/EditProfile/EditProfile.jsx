import InputSelect from "../InputSelect/InputSelect";
import InputText from "../InputText/InputText";

function EditProfile({ user, roadmaps }) {
  return (
    <form className="h-[35rem] flex flex-col gap-8 ">
      <div className="flex gap-2">
        <InputText
          type="text"
          label="Nome"
          placeholder={user.firstName}
          id="nome"
        />
        <InputText
          type="text"
          label="Sobrenome"
          placeholder={user.lastName}
          id="sobrenome"
        />
      </div>
      <InputText type="email" label="E-mail" placeholder={user.email} />
      <InputText type="password" label="Senha" placeholder="senha" />
      <InputSelect
        label="Sua trilha"
        defaultOption={user.currentRoadmap}
        options={roadmaps}
        id="roadmap"
      />
    </form>
  );
}

export default EditProfile;
