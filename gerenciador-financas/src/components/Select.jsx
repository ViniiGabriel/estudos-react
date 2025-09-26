function Select({ options, value, onChange }) {
  return (
    <div className="flex items-center gap-4 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full">
      <select
        className="w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Selecione um tipo
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
