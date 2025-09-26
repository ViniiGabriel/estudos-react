function InputText({ type = "text", placeholder, value, onChange, children }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="font-light">{children}</h2>
      <input
        className="w-full border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputText;
