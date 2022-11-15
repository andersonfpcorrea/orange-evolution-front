function InputText({
  type,
  label,
  placeholder,
  id = label,
  className,
  required = true,
  value,
  onChange,
  name,
  min = 0,
}) {
  return (
    <div
      className={`flex flex-col gap-2 text-lg font-light w-full ${className}`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        className="border-[1px] rounded-lg p-4 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        minLength={min}
      />
    </div>
  );
}

export default InputText;
