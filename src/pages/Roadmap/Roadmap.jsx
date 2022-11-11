import { useContext } from "react";
import AppContext from "../../context/context";
import Contents from "../../components/Contents/Contexts";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import BackNavArrow from "../../components/BackNavArrow/BackNavArrow";

function Roadmap() {
  const filters = [
    {
      name: "Classe",
      options: ["Hard skill", "Soft skill"],
    },
  ];

  const {
    roadmaps: { roadmaps },
  } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-12">
      <BackNavArrow />
      <div className="flex flex-col gap-8">
        <SearchBar
          normalText="Explore Trilhas - "
          boldText="Desenvolvimento Full Stack"
        />
        <SearchFilters filters={filters} />
      </div>
      <Contents
        heading="Respositório de Trilhas"
        type="roadmap"
        data={roadmaps}
      />
    </div>
  );
}

export default Roadmap;
