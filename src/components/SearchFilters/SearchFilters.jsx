import { useState } from "react";
import { MdFilterList } from "react-icons/md";

function SearchFilters({ filters, setList }) {
  const [format, setFormat] = useState("");
  const [length, setLength] = useState("");

  const handleSelect = ([option]) => {
    if (option.dataset.type === "Duração") {
      setLength(option.value);
    }
    if (option.dataset.type === "Formato") {
      setFormat(option.value); //! CONTINUAR DA IMPLEMENTAÇÃO DA FILTRAGEM DE "setList"
    }
  };

  return (
    <div className="flex max-[959px]:justify-around min-[960px]:gap-14">
      {filters.map((f) => (
        <div
          className="relative border-[1px] rounded-2xl border-orangeGrey"
          key={f.name}
        >
          <MdFilterList className="absolute right-4 top-2 pointer-events-none" />
          <select
            name={f.name}
            className="rounded-2xl w-32 pl-4 py-1 appearance-none bg-white"
            onChange={({ target }) => handleSelect([...target.selectedOptions])}
          >
            <option value="">{f.name}</option>
            {f.options.map((opt) => (
              <option value={opt} key={opt} data-type={f.name}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default SearchFilters;
