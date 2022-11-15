import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import fetchCoursesByName from "../../APIRequests/fetchCoursesByName";
import Loading from "../Loading/Loading";

function SearchBar({ normalText, boldText, setList }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { courses } = await fetchCoursesByName(input);
    setList(courses);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <Loading
        className={`${
          loading ? "absolute" : "hidden"
        } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      />
      <h2 className="text-2xl">
        {normalText}
        <span className="font-medium">{boldText}</span>
      </h2>
      <form className="relative" onSubmit={handleSubmit}>
        <label htmlFor="search">
          <FiSearch className="absolute top-[1.3rem] left-6 h-5 w-5" />
          <input
            type="text"
            id="search"
            className="bg-evolutionIce w-full h-16 rounded-2xl px-16"
            placeholder="Procure mais conteúdos"
            value={input}
            onChange={({ target: { value } }) => setInput(value)}
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
