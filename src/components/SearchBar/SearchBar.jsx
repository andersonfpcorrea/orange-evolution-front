import { FiSearch } from "react-icons/fi";

function SearchBar({ normalText, boldText }) {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h2 className="text-2xl">
        {normalText}
        <span className="font-medium">{boldText}</span>
      </h2>
      <label htmlFor="search" className="relative">
        <FiSearch className="absolute top-[1.1rem] left-6 h-5 w-5" />
        <input
          type="text"
          id="search"
          className="bg-evolutionIce w-full h-16 rounded-2xl px-16"
          placeholder="Procure mais conteúdos"
        />
      </label>
    </div>
  );
}

export default SearchBar;
