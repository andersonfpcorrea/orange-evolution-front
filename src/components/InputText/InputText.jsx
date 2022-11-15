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
      />
    </div>
  );
}

export default InputText;
