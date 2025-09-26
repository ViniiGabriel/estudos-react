function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="w-full bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-900 transition-colors"
    >
      {props.children}
    </button>
  );
}

export default Button;
