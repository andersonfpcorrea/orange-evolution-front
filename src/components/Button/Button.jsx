function Button({ text, outline = false, type = 'button' }) {
  return (
    <button
      type={type}
      className={`text-xl ${
        outline
          ? 'border-evolution border-solid border-[1px] text-evolution'
          : 'bg-evolution border-none text-white'
      } rounded-md h-12 w-36`}
    >
      {text}
    </button>
  );
}

export default Button;
