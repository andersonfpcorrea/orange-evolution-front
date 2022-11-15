import { useContext } from "react";
import AppContext from "../../context/context";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

function Progress() {
  const {
    user: { currentRoadmap, progress: userProgress },
  } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="font-medium text-2xl" style={{ color: "#181B1A" }}>
        Seu progresso
      </h2>
      <div className="flex justify-around" style={{ color: "#333" }}>
        {userProgress && (
          <ProgressCircle userProgress={userProgress} speed={30} />
        )}
        <div className="flex flex-col  min-[960px]:gap-6 justify-around min-[960px]:justify-start text-lg  pt-4 pl-4 min-[960px]:p-8">
          <p>
            Você está na formação&nbsp;
            <span className="font-semibold">{currentRoadmap}</span>
          </p>
          <p>
            Consuma conteúdos para progredir no{" "}
            <span className="font-semibold">Orange Evolution</span>
          </p>
          <p>
            Na aba <span className="font-semibold">Meu perfil</span> você pode
            mudar sua formação
          </p>
        </div>
      </div>
    </div>
  );
}

export default Progress;
