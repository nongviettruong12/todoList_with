import './App.css'
import NewTask from './components/new_task';
import TodoList from './components/todo_list';
import Filter from './components/filter';
function App() {
  return (
    <div className="App">
          <h1>todo list example</h1>
          <NewTask />
          <TodoList />
          <Filter />
    </div>
  );
}

export default App;
