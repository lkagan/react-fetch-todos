import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTodos(json))
  }, []);

  return (
    <div className="App">
      <ul style={{textAlign: 'left'}}>
        { todos?.map(todo => <li key={todo.id}>{todo.title}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
