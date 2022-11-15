import InputSelect from "../InputSelect/InputSelect";
import InputText from "../InputText/InputText";

function EditProfile({ user, roadmaps, handlers, values }) {
  return (
    <form className="h-[35rem] flex flex-col gap-8">
      <div className="flex gap-2">
        <InputText
          type="text"
          name="firstName"
          label="Nome"
          placeholder={user.firstName}
          id="nome"
          required
          value={values.firstName}
          onChange={({ target: { value } }) => handlers.setFirstName(value)}
        />
        <InputText
          type="text"
          name="lastName"
          label="Sobrenome"
          placeholder={user.lastName}
          id="sobrenome"
          required
          value={values.lastName}
          onChange={({ target: { value } }) => handlers.setLastName(value)}
        />
      </div>
      <InputText
        type="email"
        label="E-mail"
        placeholder={user.email}
        name="email"
        required
        value={values.email}
        onChange={({ target: { value } }) => handlers.setEmail(value)}
      />
      <InputText
        type="password"
        label="Senha"
        placeholder="senha"
        name="password"
        required
        value={values.password}
        onChange={({ target: { value } }) => handlers.setPassword(value)}
      />
      <InputSelect
        label="Sua trilha"
        name="roadmap"
        defaultOption={user.currentRoadmap}
        options={roadmaps}
        id="roadmap"
        required
        value={values.roadmap}
        onChange={({ target: { value } }) => handlers.setRoadmap(value)}
      />
    </form>
  );
}

export default EditProfile;
