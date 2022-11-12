function InputText({ type, label, placeholder, id = label, className }) {
  return (
    <div
      className={`flex flex-col gap-2 text-lg font-light w-full ${className}`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className="border-[1px] rounded-lg p-4 w-full"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputText;
