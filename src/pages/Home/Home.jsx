import { useContext, useState } from "react";
import AppContext from "../../context/context";
import Progress from "../../components/Progress/Progress";
import Recommended from "../../components/Recommended/Recommended";
import SearchBar from "../../components/SearchBar/SearchBar";
import Animate from "../../components/Animate/Animate";

function Home() {
  const {
    user: { firstName },
    currentRoadmapCourses: { courses },
  } = useContext(AppContext);
  const [homeList, setHomeList] = useState(courses);

  return (
    <Animate>
      <div className="flex flex-col gap-12">
        <SearchBar
          normalText="Boas vindas, "
          boldText={firstName}
          setList={setHomeList}
        />
        <Progress />
        <Recommended courses={homeList} />
      </div>
    </Animate>
  );
}

export default Home;
