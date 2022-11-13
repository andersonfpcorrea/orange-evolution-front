// import { useState } from "react";
import Button from "../../components/Button/Button";

function UserTests() {
  // const [current, setCurrent] = useState(0);
  // const questions = ["1. Onde as variáveis ficam armazenadas?"];
  // const options = {
  //   0: [
  //     "no programa-software",
  //     "na memória RAM do computador",
  //     "no banco de dados",
  //     "no banco de dados, RAM e software",
  //   ],
  // };

  return (
    <div className="flex flex-col gap-14 max-w-2xl">
      <div>
        <h2 className="text-evolution text-3xl font-semibold">Área de Teste</h2>
        <p>Vamos testar seus conhecimentos para configurar sua experiência</p>
      </div>
      <form className="flex flex-col gap-10">
        <fieldset>
          <p>Implementar aqui a lógica das perguntas</p>
          <ul className="list-disc">
            <li>Alternativa 1</li>
            <li>Alternativa 2</li>
            <li>Alternativa 3</li>
            <li>Alternativa 4</li>
          </ul>
        </fieldset>
        <div className="flex justify-end">
          <Button text="Entrar" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default UserTests;
