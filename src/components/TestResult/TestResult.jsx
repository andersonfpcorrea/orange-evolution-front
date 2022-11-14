import ProgressCircle from "../ProgressCircle/ProgressCircle";
import Recommended from "../Recommended/Recommended";

function TestResult({ correctAnswers, totalOfQuestions }) {
  const data = (correctAnswers / totalOfQuestions) * 100;
  console.log(data);
  return (
    <div className="flex flex-col gap-20   max-w-2xl h-full">
      <div>
        <h2 className="text-evolution text-3xl font-semibold">
          Sua trilha de sucesso está pronta!
        </h2>
        <p className="text-lg">
          Com base no seu teste, essa é a trilha ideal pra você
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
