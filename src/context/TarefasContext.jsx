import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

export const TarefasContext = createContext(); // ← export nomeado

export function TarefasProvider({ children }) { // ← export nomeado
  const [tarefas, setTarefas] = useLocalStorage("tarefas", []);

  const adicionarTarefa = (titulo) => {
    if (!titulo.trim()) return;
    setTarefas(prev => [...prev, { id: Date.now(), titulo: titulo.trim(), concluida: false }]);
  };

  const alternarConcluida = (id) => {
    setTarefas(prev => prev.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  };

  const removerTarefa = (id) => {
    setTarefas(prev => prev.filter(t => t.id !== id));
  };

  return (
    <TarefasContext.Provider value={{ tarefas, adicionarTarefa, alternarConcluida, removerTarefa }}>
      {children}
    </TarefasContext.Provider>
  );
}
