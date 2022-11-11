function InputSelect({
  options = [],
  defaultOption,
  label,
  placeholder,
  id = label,
  className,
}) {
  return (
    <div className={`flex justify-between ${className}`}>
      <div className='flex flex-col gap-2 text-lg font-light w-full'>
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          className='border-[1px] rounded-lg p-4 bg-white'
          placeholder={placeholder}
        >
          {options.map((opt) => (
            <option selected={opt === defaultOption} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputSelect;
