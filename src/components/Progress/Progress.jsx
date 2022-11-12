import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/context";

function Progress() {
  const [progress, setProgress] = useState(0);
  const {
    user: { progress: userProgress },
  } = useContext(AppContext);
  const speed = 30;

  const animateProgressBar = () =>
    setTimeout(() => {
      setProgress(progress + 1);
    }, speed);

  useEffect(() => {
    if (progress < userProgress) animateProgressBar();
  }, [progress]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="font-medium text-2xl" style={{ color: "#181B1A" }}>
        Seu progresso
      </h2>
      <div className="flex justify-around" style={{ color: "#333" }}>
        <div className="grid place-items-center pt-4">
          <div
            className="h-48 w-48 rounded-full grid place-content-center relative before:bg-white before:rounded-full before:h-40 before:w-40 before:absolute before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2"
            style={{
              background: `conic-gradient(
                #FB6D3A ${progress * 3.6}deg,
                #ddd ${progress * 3.6}deg`,
            }}
          >
            <div className="isolate text-5xl text-evolutionGrey">{`${progress}%`}</div>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-8 justify-start">
          <p>
            Você está na formação
            <span className="font-semibold">Desenvolvimento Full-Stack</span>
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
