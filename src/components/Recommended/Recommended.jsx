import { useContext } from "react";
// import AliceCarousel from "react-alice-carousel";
// import "./carousel.css";
import AppContext from "../../context/context";
import Card from "../Card/Card";
import Slider from "../Slider/Slider";

function Recommended() {
  const {
    currentRoadmapCourses: { courses },
  } = useContext(AppContext);

  // const responsive = {
  //   0: { items: 1 },
  //   880: { items: 1 },
  //   950: { items: 1.4 },
  //   1000: { items: 1.5 },
  //   1030: { items: 1.6 },
  //   1080: { items: 1.8 },
  //   1110: { items: 2 },
  //   1160: { items: 2.4 },
  //   1220: { items: 2.6 },
  //   1260: { items: 2.8 },
  //   1330: { items: 3 },
  //   1400: { items: 3.2 },
  //   1600: { items: 3.8 },
  // };

  const cards = courses.map((course) => (
    <Card course={course} key={course.id} />
  ));

  return (
    <div className="flex flex-col gap-8 w-full">
      <h2 className="font-medium text-2xl">Recomendado para você</h2>
      {/* <AliceCarousel
        mouseTracking
        items={cards}
        responsive={responsive}
        controlsStrategy="alternate"
      /> */}
      <Slider elements={cards} />
    </div>
  );
}

export default Recommended;
