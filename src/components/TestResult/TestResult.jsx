import { useContext } from "react";
import AppContext from "../../context/context";
import Animate from "../Animate/Animate";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import Recommended from "../Recommended/Recommended";

function TestResult() {
  const {
    result,
    totalQuestions,
    currentRoadmapCourses: { courses },
  } = useContext(AppContext);
  const data = (result / totalQuestions) * 100;

  return (
    <Animate>
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
          <ProgressCircle userProgress={data} speed={20} />
        </div>
        <Recommended courses={courses} />
      </div>
    </Animate>
  );
}

export default TestResult;
