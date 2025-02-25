import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header"
import { useTodos } from './hooks/useTodos'

const App = () => {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    todos: filteredTodos
  } = useTodos()

  return (
    <div className="todoapp">
      <Header saveTodo={handleSave} />
      <Todos
        setTitle={handleUpdateTitle}
        setCompleted={handleCompleted}
        removeTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        completedCount={completedCount}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default App;