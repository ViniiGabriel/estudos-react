import { useEffect, useState } from "react";
import Button from "./Button";
import InputText from "./InpuxText";
import Select from "./Select";
import TitleInput from "./TitleInput";

function RegistrationFinance({ onButtonRegister }) {
  const [valueFinance, setValueFinance] = useState(
    JSON.parse(localStorage.getItem("valor")) || ""
  );

  useEffect(() => {
    localStorage.setItem("valor", JSON.stringify(valueFinance));
  }, [valueFinance]);

  const [description, setDescription] = useState(
    JSON.parse(localStorage.getItem("descricao")) || ""
  );
  const [selected, setSelected] = useState("");

  const TypeOptions = [
    { value: "entrada", label: "Entrada" },
    { value: "saida", label: "Saída" },
  ];

  function handleRegister() {
    if (!description || !selected) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!valueFinance || Number(valueFinance) <= 0) {
      alert("O valor deve ser um número maior que zero.");
      return;
    }

    // chama a função do App
    onButtonRegister(Number(valueFinance), description, selected);

    // limpa os campos
    setDescription("");
    setValueFinance("");
    setSelected("");
  }

  return (
    <div className="w-full lg:w-[40%] bg-white p-6 gap-6 rounded-md flex flex-col">
      <div className="w-full flex justify-center items-start py-2">
        <TitleInput>Cadastro de nova transação</TitleInput>
      </div>

      <Select options={TypeOptions} value={selected} onChange={setSelected} />

      <InputText
        type="text"
        placeholder="Digite uma descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      >
        Descrição:
      </InputText>

      <InputText
        type="number"
        placeholder="Digite um valor"
        value={valueFinance}
        onChange={(e) => setValueFinance(e.target.value)}
      >
        Valor:
      </InputText>

      <Button onClick={handleRegister}>Cadastrar</Button>
    </div>
  );
}

export default RegistrationFinance;
