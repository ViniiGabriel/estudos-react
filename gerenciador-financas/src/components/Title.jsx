function Title(props) {
  return (
    <div className=" w-full rounded-md justify-center">
      <h1 className="text-4xl text-white font-extrabold text-center mb-4">
        {props.children}
      </h1>
    </div>
  );
}

export default Title;
