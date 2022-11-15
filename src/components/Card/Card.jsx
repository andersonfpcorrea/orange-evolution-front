import PropTypes, { string, number } from "prop-types";
import Logo from "../../assets/black-logo.jpg";
import Background from "../../assets/christopher-gower-m_HRfLhgABo-unsplash 1.png";
import formatTimeString from "../../utils/formatTimeString";

function Card({ course, roadmap }) {
  const courseCard = (
    <a
      href={course?.url}
      className="flex flex-col justify-between py-6 px-4 text-sm h-64 w-64 rounded-2xl text-white font-medium cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.75)), url('${Background}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            src={Logo}
            alt="logo"
            className="border-2 border-dashed border-evolution h-8 w-8 rounded-full "
          />
          <p className="text-base">{course?.author}</p>
        </div>
        <p className="rounded-md p-1  bg-evolution bg-opacity-50">
          {formatTimeString(course?.length)}
        </p>
      </div>
      <p className="p-2 h-14 flex items-center justify-center rounded-lg font-medium  bg-evolution bg-opacity-50">
        {course?.course}
      </p>
    </a>
  );

  const roadmapCard = (
    <figure
      className="flex flex-col justify-between py-6 px-4 text-sm h-[35vw] md:h-72 w-full rounded-2xl text-white font-medium cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.75)), url('${roadmap?.image}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <p className="rounded-md p-1 self-end bg-evolution bg-opacity-50">
        {formatTimeString(roadmap?.length) || "14 horas"}
      </p>
      <p className="p-2 h-14 flex items-center justify-center rounded-lg font-medium  bg-evolution bg-opacity-50">
        {roadmap?.title}
      </p>
    </figure>
  );

  return course ? courseCard : roadmapCard;
}

Card.propTypes = {
  course: PropTypes.shape({
    id: number,
    course: string,
    type: string,
    author: string,
    image: string,
    length: string,
    url: string,
    roadmap: string,
  }),
  roadmap: PropTypes.shape({
    id: number,
    title: string,
    image: string,
    createdAt: string,
    updatedAt: string,
  }),
}.isRequired;

export default Card;
