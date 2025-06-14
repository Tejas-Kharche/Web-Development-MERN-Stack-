import { useState } from "react";
import "./App.css";

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [singleTodo, setSingleTodo] = useState({ title: "", desc: "" });
  const [error, setError] = useState("");
  function handleAddTodo() {
    // if (singleTodo.title.trim() === '' && singleTodo.desc.trim() === '') return;
    if (singleTodo.title.trim() === '') {
      setError("Please enter a title.");
      return;
    }
    

    setAllTodos((prevTodos) => [...prevTodos, singleTodo]);

    // Clear input after adding
    setSingleTodo({ title: "", desc: "" });
    setError('');
  }
  function deleteTodo(i) {
  setAllTodos((prevTodos) => prevTodos.filter((_, index) => index !== i));
  }


  return (
    <>
      <div className="container">
        <h1 className="main-heading"> Todos</h1>
        <label>Title</label>
        <input
          type="text"
          placeholder="What on your mind today?"
          value={singleTodo.title}
          onChange={(e) =>
            setSingleTodo((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />
        {error && <p style={{ color: "#5A4632" }}>{error}</p>}
        <br /><br />
        <label>Description</label>
        <input
          type="text"
          placeholder="Tell me more about it..."
          value={singleTodo.desc}
          onChange={(e) =>
            setSingleTodo((prev) => ({
              ...prev,
              desc: e.target.value,
            }))
          }
        />
        <br /><br />
        <button onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
        {/* Conditionally show the List Heading if there are todos */}
        {allTodos.length > 0 && (
          <h2 className="list-heading">To-Do List</h2>
        )}
      <div className="todo-list">
        {allTodos.map((data, i) => (
          <div key={i} className="todo-item">
            <p>{i+1})</p>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <button onClick={() => deleteTodo(i)}>Done!</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
