# Todo React Avançado

## Tecnologias utilizadas
- React
- Vite
- JavaScript
- Hooks
- Context API
- useMemo
- LocalStorage

## Descrição do projeto
Uma aplicação de lista de tarefas (Todo List) desenvolvida em React.  
Permite adicionar, marcar como concluída, remover e filtrar tarefas (todas, concluídas, pendentes).  
A aplicação utiliza Hooks, Context API, memoization e persistência no localStorage.

## Como rodar o projeto localmente

1. Faça o download do repositório:
   - Clique em "Code" → "Download ZIP"  
   ou clone com Git:
   ```bash
   git clone https://github.com/SEU_USUARIO/todo-react-avancado.git
   ```
2. Abra a pasta do projeto no seu computador.
3. Instale as dependências usando Node.js:
   ```bash
   npm install
   ```
4. Rode o projeto:
   ```bash
   npm run dev
   ```
5. Abra no navegador:
```
http://localhost:5173/
```

## Estrutura do projeto
```
src/
  components/   # Componentes React (FormTarefa, ListaTarefas, Tarefa, Filtro)
  context/      # Context API (TarefasContext)
  hooks/        # Hooks customizados (useLocalStorage)
  App.jsx       # Componente principal
  main.jsx      # Entrada da aplicação
```
