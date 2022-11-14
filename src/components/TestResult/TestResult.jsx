import { useContext } from "react";
import AppContext from "../../context/context";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import Recommended from "../Recommended/Recommended";

function TestResult() {
  const { result, totalQuestions } = useContext(AppContext);
  const data = (result / totalQuestions) * 100;
  return (
    <div className="flex flex-col gap-20 max-w-full h-full min-[1360px]:pl-[8vw]">
      <div>
        <h2 className="text-evolution text-3xl font-semibold">
          Sua trilha de sucesso está pronta!
        </h2>
        <p className="text-lg">
          Com base no seu teste, esta é a trilha ideal pra você
        </p>
      </div>
      <div className="flex gap-16 items-center">
        <p className="text-xl">Seu resultado:</p>
        <ProgressCircle userProgress={data} speed={30} />
      </div>
      <Recommended />
    </div>
  );
}

export default TestResult;
