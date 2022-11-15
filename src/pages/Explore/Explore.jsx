import { useContext, useState } from "react";
import AppContext from "../../context/context";
import Contents from "../../components/Contents/Contents";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import BackNavArrow from "../../components/BackNavArrow/BackNavArrow";
import Animate from "../../components/Animate/Animate";

function Explore() {
  const filters = [
    {
      name: "Classe",
      options: ["Hard skill", "Soft skill"],
    },
    {
      name: "Formato",
      options: ["Apostila", "Artigo", "Curso", "Livro", "Vídeo", "Live"],
    },
    {
      name: "Duração",
      options: ["Até 10 min", "Até 60 min", "+ 1 hora"],
    },
  ];

  const {
    currentRoadmapCourses: { courses },
    user: { currentRoadmap },
  } = useContext(AppContext);

  const [exploreList, setExploreList] = useState(courses);

  return (
    <Animate>
      <div className="flex flex-col gap-12 relative">
        <BackNavArrow />
        <div className="flex flex-col gap-8">
          <SearchBar
            normalText="Explore conteúdos - "
            boldText={currentRoadmap}
            setList={setExploreList}
          />
          <SearchFilters
            filters={filters}
            setList={setExploreList}
            list={exploreList}
          />
        </div>
        <Contents
          heading="Repositório de Conteúdos"
          type="course"
          data={exploreList}
        />
      </div>
    </Animate>
  );
}

export default Explore;
