import Animate from "../../components/Animate/Animate";
import BackNavArrow from "../../components/BackNavArrow/BackNavArrow";
import MyCoursesMain from "../../components/MyCoursesMain/MyCoursesMain";

function MyCourses() {
  return (
    <Animate className="relative">
      <BackNavArrow />
      <MyCoursesMain />
    </Animate>
  );
}

export default MyCourses;
