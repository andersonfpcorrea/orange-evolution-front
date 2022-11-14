import { useContext } from "react";
import AppContext from "../../context/context";
import Card from "../Card/Card";
import Slider from "../Slider/Slider";

function Recommended({ className }) {
  const {
    currentRoadmapCourses: { courses },
  } = useContext(AppContext);

  const cards = courses.map((course) => (
    <Card course={course} key={course.id} />
  ));

  return (
    <div className={`flex flex-col gap-8 w-full ${className}`}>
      <h2 className="font-medium text-2xl">Recomendado para você</h2>
      <Slider elements={cards} />
    </div>
  );
}

export default Recommended;
