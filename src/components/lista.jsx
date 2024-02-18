import React, { useState } from "react";
import "./styles/lista.scss";

function Lista({ atualizarData }) {
  const [inputs, setInputs] = useState([""]);

  const adicionarCampo = () => {
    setInputs([...inputs, ""]);
  };

  const atualizarValor = (index, valor) => {
    const novosInputs = [...inputs];
    novosInputs[index] = valor;
    setInputs(novosInputs);

    // Atualizar a variável data no componente pai
    const novosDados = [
      ["Task", "Hours per Day"],
      ...novosInputs.map((item, idx) => [item || `Item ${idx}`, 1]),
    ];
    atualizarData(novosDados);
  };

  return (
    <>
      <fieldset>
        <legend>Filmes</legend>

        {inputs.map((valor, index) => (
          <input
            key={index}
            type="text"
            value={valor}
            onChange={(e) => atualizarValor(index, e.target.value)}
          />
        ))}

        <button id="adicionar" onClick={adicionarCampo}>
          +
        </button>
      </fieldset>
    </>
  );
}

export default Lista;
