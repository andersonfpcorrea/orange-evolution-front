import { useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import "./carousel.css";
import AppContext from "../../context/context";
import Card from "../Card/Card";

function Recommended() {
  const {
    currentRoadmapCourses: { courses },
  } = useContext(AppContext);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = courses.map((course) => (
    <Card course={course} key={course.id} />
  ));

  return (
    <div className="flex flex-col gap-8 w-[50rem]">
      <h2 className="font-medium text-2xl">Recomendado para você</h2>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
}

export default Recommended;
