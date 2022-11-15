import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/context";
import Animate from "../../components/Animate/Animate";
import ButtonRounded from "../../components/ButtonRounded/ButtonRounded";

function UserTests() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const {
    quiz: { questions, options },
    setResult,
    result,
  } = useContext(AppContext);

  // Reset the test result:
  useEffect(() => setResult(0), []);

  const checkAnswer = ({ target }) => {
    const { answer } = Object.fromEntries([...new FormData(target)]);
    if (Number(answer) === options[current].correct) setResult(result + 1);
    return null;
  };

  const handleNext = (e) => {
    e.preventDefault();
    checkAnswer(e);
    if (current + 1 < Object.keys(questions).length) setCurrent(current + 1);
    else navigate("/app/result");
  };

  return (
    <div className="flex flex-col gap-20 max-w-2xl h-full min-[1360px]:pl-[6vw] min-[1360px]:max-w-[55vw]">
      <div>
        <h2 className="text-evolution text-3xl font-semibold">Área de Teste</h2>
        <p className="text-lg">
          Vamos testar seus conhecimentos para configurar sua experiência
        </p>
      </div>
      <form className="flex flex-col gap-20" onSubmit={handleNext}>
        <fieldset>
          <Animate id={current} className="flex flex-col gap-8">
            <p className="text-lg">{questions[current]}</p>
            <ul className="flex flex-col gap-4 h-52">
              {options[current].opt.map((el, i) => (
                <li key={el.slice(0, 10)} className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="answer"
                    value={i}
                    id={el.slice(0, 10)}
                    className="transition-all scale-125"
                  />
                  <label htmlFor={el.slice(0, 10)}>{el}</label>
                </li>
              ))}
            </ul>
          </Animate>
        </fieldset>
        <div className="flex justify-end">
          <ButtonRounded type="submit" />
        </div>
      </form>
    </div>
  );
}

export default UserTests;
