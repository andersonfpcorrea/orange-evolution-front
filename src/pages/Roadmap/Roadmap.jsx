import { useContext, useState } from "react";
import AppContext from "../../context/context";
import Contents from "../../components/Contents/Contents";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import BackNavArrow from "../../components/BackNavArrow/BackNavArrow";
import Animate from "../../components/Animate/Animate";

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
    <Animate>
      <div className="flex flex-col gap-12 relative">
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
    </Animate>
  );
}

export default Roadmap;
