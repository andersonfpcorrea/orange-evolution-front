import { useState, useEffect } from "react";

function ProgressCircle({ userProgress, speed }) {
  const [progress, setProgress] = useState(0);

  const animateProgressBar = () =>
    setTimeout(() => {
      setProgress(progress + 1);
    }, speed);

  useEffect(() => {
    if (progress < userProgress) animateProgressBar();
  }, [progress]);
  return (
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
  );
}

export default ProgressCircle;
