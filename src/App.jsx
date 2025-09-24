import React, { useState } from "react";
import { TarefasProvider } from "./context/TarefasContext.jsx";
import FormTarefa from "./components/FormTarefa.jsx";
import Filtro from "./components/Filtro.jsx";
import ListaTarefas from "./components/ListaTarefas.jsx";

function App() {
  const [filtro, setFiltro] = useState("todas");

  return (
    <TarefasProvider>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h1>Todo React Avançado</h1>
        <FormTarefa />
        <Filtro filtro={filtro} setFiltro={setFiltro} />
        <ListaTarefas filtro={filtro} />
      </div>
    </TarefasProvider>
  );
}

export default App;
