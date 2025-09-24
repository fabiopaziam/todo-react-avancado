import React, { memo, useContext } from "react";
import { TarefasContext } from "../context/TarefasContext.jsx";

function Tarefa({ tarefa }) {
  const { alternarConcluida, removerTarefa } = useContext(TarefasContext);

  return (
    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #eee" }}>
      <label>
        <input type="checkbox" checked={tarefa.concluida} onChange={() => alternarConcluida(tarefa.id)} />
        <span style={{ textDecoration: tarefa.concluida ? "line-through" : "none", marginLeft: "8px" }}>{tarefa.titulo}</span>
      </label>
      <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
    </li>
  );
}

export default memo(Tarefa);
