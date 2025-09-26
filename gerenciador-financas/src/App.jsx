import { useState } from "react";
import DashFinance from "./components/DashFinance";
import RegistrationFinance from "./components/RegistrationFinance";
import Title from "./components/Title";

function App() {
  const [entradas, setEntradas] = useState(
    JSON.parse(localStorage.getItem("entradas")) || []
  );
  const [saidas, setSaidas] = useState(
    JSON.parse(localStorage.getItem("saidas")) || []
  );

  function onButtonRegister(valor, descricao, tipo) {
    if (tipo === "entrada") {
      let id;
      if (entradas.length === 0) {
        id = 1;
      } else {
        id = entradas[entradas.length - 1].id + 1;
      }
      const novaEntrada = { id, valor, descricao, tipo };
      const novasEntradas = [...entradas, novaEntrada];
      setEntradas(novasEntradas);
      localStorage.setItem("entradas", JSON.stringify(novasEntradas));
    } else if (tipo === "saida") {
      let id;
      if (saidas.length === 0) {
        id = 1;
      } else {
        id = saidas[saidas.length - 1].id + 1;
      }
      const novaSaida = { id, valor, descricao, tipo };
      const novasSaidas = [...saidas, novaSaida];
      setSaidas(novasSaidas);
      localStorage.setItem("saidas", JSON.stringify(novasSaidas));
    }
  }

  return (
    <div className="bg-blue-900 min-h-screen w-screen flex p-6">
      <div className="w-full space-y-4 flex flex-col">
        <Title>Dashboard</Title>
        <div className="w-full flex flex-col sm:flex-row relative justify-center gap-4">
          <RegistrationFinance onButtonRegister={onButtonRegister} />
          <DashFinance entradas={entradas} saidas={saidas} />
        </div>
      </div>
    </div>
  );
}

export default App;
