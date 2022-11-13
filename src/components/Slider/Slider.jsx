import { useRef } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import style from "./Slider.module.css";

function Slider({ elements, speed = 15 }) {
  const step = speed;
  const refScrollDiv = useRef({ scrollLeft: 0 });
  const isScrollRef = useRef(false);
  const setMove = (bool) => {
    isScrollRef.current = bool;
  };
  const moveScroll = (side, ref) => {
    if (isScrollRef.current) {
      // eslint-disable-next-line no-param-reassign
      if (side === "right") ref.current.scrollLeft += step;
      // eslint-disable-next-line no-param-reassign
      else ref.current.scrollLeft -= step;
      requestAnimationFrame(() => moveScroll(side, ref));
    }
  };

  return (
    <div className="relative">
      <div className={`${style.scroll}`} ref={refScrollDiv}>
        <button
          type="button"
          className={`${style.button} grid place-items-center h-12 w-12 bg-evolutionIce rounded-full opacity-50 border-evolution border-2 cursor-pointer absolute top-1/2 -translate-y-1/2 left-0  shadow-black shadow-lg active:shadow-sm`}
          onMouseDown={() => {
            setMove(true);
            moveScroll("left", refScrollDiv);
          }}
          onMouseUp={() => setMove(false)}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <button
          type="button"
          className={`${style.button} grid place-items-center h-12 w-12 bg-evolutionIce rounded-full opacity-50 border-evolution border-2 cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 shadow-black shadow-lg active:shadow-sm`}
          onMouseDown={() => {
            setMove(true);
            moveScroll("right", refScrollDiv);
          }}
          onMouseUp={() => setMove(false)}
        >
          <MdOutlineArrowForwardIos />
        </button>
        <div className="flex gap-2 w-fit pl-4">{elements}</div>
      </div>
    </div>
  );
}

export default Slider;
