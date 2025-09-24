import React, { useContext, useMemo } from "react";
import { TarefasContext } from "../context/TarefasContext.jsx";
import Tarefa from "./Tarefa.jsx";

function ListaTarefas({ filtro }) {
  const { tarefas } = useContext(TarefasContext);

  const tarefasFiltradas = useMemo(() => {
    if (filtro === "concluidas") return tarefas.filter(t => t.concluida);
    if (filtro === "pendentes") return tarefas.filter(t => !t.concluida);
    return tarefas;
  }, [tarefas, filtro]);

  if (tarefasFiltradas.length === 0) return <p>Sem tarefas</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tarefasFiltradas.map(t => <Tarefa key={t.id} tarefa={t} />)}
    </ul>
  );
}

export default ListaTarefas;
