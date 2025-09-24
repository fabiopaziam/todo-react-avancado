import React from "react";

function Filtro({ filtro, setFiltro }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <button onClick={() => setFiltro("todas")}>Todas</button>
      <button onClick={() => setFiltro("concluidas")}>Concluídas</button>
      <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
    </div>
  );
}

export default Filtro;
