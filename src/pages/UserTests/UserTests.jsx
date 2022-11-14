import PropTypes from "prop-types";
import { useState } from "react";
import Animate from "../../components/Animate/Animate";
import ButtonRounded from "../../components/ButtonRounded/ButtonRounded";

function UserTests({ callback, setResult, result, quiz }) {
  const [current, setCurrent] = useState(0);
  const { questions, options } = quiz;

  const checkAnswer = ({ target }) => {
    const { answer } = Object.fromEntries([...new FormData(target)]);
    if (Number(answer) === options[current].correct) setResult(result + 1);
    return null;
  };

  const handleNext = (e) => {
    e.preventDefault();
    checkAnswer(e);
    if (current + 1 < Object.keys(questions).length) setCurrent(current + 1);
    else callback();
  };

  return (
    <div className="flex flex-col gap-20   max-w-2xl h-full">
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
                    className="appearance-none transition-all scale-110"
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

UserTests.propTypes = {
  callback: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired,
  result: PropTypes.number.isRequired,
};

export default UserTests;
