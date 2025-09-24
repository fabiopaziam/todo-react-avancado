import { useState, useContext } from "react";
import { TarefasContext } from "../context/TarefasContext.jsx"; // ← chaves porque é export nomeado


function FormTarefa() {
  const [input, setInput] = useState("");
  const { adicionarTarefa } = useContext(TarefasContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarTarefa(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Digite uma tarefa..."
        style={{ flex: 1, padding: "8px" }}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormTarefa;
