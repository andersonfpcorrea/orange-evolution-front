function InputSelect({
  options = [],
  defaultOption,
  label,
  id = label,
  className,
  value,
  onChange,
}) {
  return (
    <div className={`flex justify-between ${className}`}>
      <div className="flex flex-col gap-2 text-lg font-light w-full">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          className="border-[1px] rounded-lg p-4 bg-white"
          value={value}
          onChange={onChange}
        >
          {options.map((opt) => (
            <option key={opt.id} defaultValue={defaultOption} value={opt.title}>
              {opt.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputSelect;
