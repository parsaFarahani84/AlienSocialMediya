import { useAtom } from "jotai";
import "./App.css";
import { Atomdata } from "./jotai/JotaiData";
import { useState } from "react";
import { BiCircle, BiTrash, BiPencil, BiCheckCircle } from "react-icons/bi";

function App() {
  const [data, setData] = useAtom(Atomdata);
  const [input, setInput] = useState("");

  const formHandler = function (e) {
    e.preventDefault();

    if (input.length > 0) {
      setData([
        {
          id: Math.random(),
          title: input,
          status: false,
        },
        ...data,
      ]);
    } else {
      return;
    }

    setInput("");
  };

  const IdHandler = function (i) {
    setData((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === i.id ? { ...todo, status: !i.status } : todo
      )
    );
  };

  const deleteHandler = function (i) {
    const newDeleted = data.filter((e) => e.id !== i.id);
    setData(newDeleted);
  };

  const [update, setUpdate] = useState("");

  const editHndler = function (i) {};

  return (
    <div className="todo-app">
      <form onSubmit={formHandler} className="todo-form">
        <div className="input-container">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
            className="todo-input"
          />
          <button className="add-button">Add</button>
        </div>
        <div className="todo-list">
          {data.map((i) => (
            <div key={i.id} className={`todo-item ${i.status ? "done" : ""}`}>
              <h2>{i.title}</h2>
              <div>
                {!i.status ? (
                  <BiCircle onClick={() => IdHandler(i)} className="icon" />
                ) : (
                  <BiCheckCircle
                    onClick={() => IdHandler(i)}
                    className="icon"
                  />
                )}
                <BiTrash onClick={() => deleteHandler(i)} className="icon" />
                <BiPencil onClick={() => editHndler(i)} className="icon" />
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
