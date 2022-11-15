import { useContext } from "react";
import AppContext from "../../context/context";
import Progress from "../../components/Progress/Progress";
import Recommended from "../../components/Recommended/Recommended";
import SearchBar from "../../components/SearchBar/SearchBar";
import Animate from "../../components/Animate/Animate";

function Home() {
  const {
    user: { firstName },
  } = useContext(AppContext);

  return (
    <Animate>
      <div className="flex flex-col gap-12">
        <SearchBar normalText="Boas vindas, " boldText={firstName} />
        <Progress />
        <Recommended />
      </div>
    </Animate>
  );
}

export default Home;
