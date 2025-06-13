import { useState } from "react";

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [singleTodo, setSingleTodo] = useState({ title: "", desc: "" });

  function handleAddTodo() {
    // if (singleTodo.title.trim() === '' && singleTodo.desc.trim() === '') return;

    setAllTodos((prevTodos) => [...prevTodos, singleTodo]);

    // Clear input after adding
    setSingleTodo({ title: "", desc: "" });
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          value={singleTodo.title}
          onChange={(e) =>
            setSingleTodo((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />
        <br /><br />
        <input
          type="text"
          placeholder="desc"
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
          Add ToDo
        </button>
      </div>

      <div>
        {allTodos.map((data, i) => (
          <div key={i}>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
