function InputText({ type, label, placeholder, id = label, className }) {
  return (
    <div className={`flex justify-between ${className}`}>
      <div className='flex flex-col gap-2 text-lg font-light w-full'>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          className='border-[1px] rounded-lg p-4'
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputText;
