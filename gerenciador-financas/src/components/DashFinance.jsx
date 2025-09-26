import Button from "./Button";
import InputText from "./InpuxText";
import Select from "./Select";
import Title from "./Title";
import TitleInput from "./TitleInput";

function DashFinance({ entradas, saidas }) {
  const TypeOptions = [
    { value: "entrada", label: "Entrada" },
    { value: "saida", label: "Saída" },
  ];

  console.log(entradas);

  return (
    <div className="w-full lg:w-[40%] items-center bg-white p-6 gap-6 rounded-md flex flex-col">
      <div className="h-[40%] w-full flex flex-col py-2">
        <div className="w-full items-center flex justify-center">
          <TitleInput>Últimas Entradas</TitleInput>
        </div>
        <div className="my-3 w-full flex border-b border-t border-slate-300">
          <div className="py-3  w-[60%]">
            {entradas
              .slice(-3)
              .reverse()
              .map((item) => (
                <p key={item.id}>{item.descricao}</p>
              ))}
          </div>
          <div className="py-3 w-[40%] flex flex-col items-end">
            {entradas
              .slice(-3)
              .reverse()
              .map((item) => (
                <p key={item.id}>
                  {item.valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="h-[50%] w-full flex flex-col py-2 items-center">
        <TitleInput>Últimas Saídas</TitleInput>
        <div className="my-3 w-full flex border-b border-t border-slate-300">
          <div className="py-3  w-[60%]">
            {saidas
              .slice(-3)
              .reverse()
              .map((item) => (
                <p key={item.id}>{item.descricao}</p>
              ))}
          </div>
          <div className="py-3 w-[40%] flex flex-col items-end">
            {saidas
              .slice(-3)
              .reverse()
              .map((item) => (
                <p key={item.id}>
                  {item.valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashFinance;
