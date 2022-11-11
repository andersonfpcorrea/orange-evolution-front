import { MdFilterList } from "react-icons/md";

function SearchFilters({ filters }) {
  return (
    <div className="flex gap-14">
      {filters.map((f) => (
        <div
          className="relative border-[1px] rounded-2xl border-orangeGrey"
          key={f.name}
        >
          <MdFilterList className="absolute right-4 top-2 pointer-events-none" />
          <select
            name={f.name}
            className="rounded-2xl w-32 pl-4 py-1 appearance-none bg-white"
          >
            <option value="">{f.name}</option>
            {f.options.map((opt) => (
              <option value={opt} key={opt}>
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
