import { useAtom } from "jotai";
import "./App.css";
import { Atomdata } from "./jotai/JotaiData";
import { useState } from "react";
import { BiCircle, BiTrash, BiPencil, BiCheckCircle } from "react-icons/bi";

function App() {
  const [data, setData] = useAtom(Atomdata);
  const [input, setInput] = useState("");
  const [update, setUpdated] = useState("");

  const formHandler = function (e) {
    e.preventDefault();

    if (input.length > 0) {
      setData([
        {
          id: Math.random(),
          title: input,
          status: false,
          enableEditing: false,
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

  const editHndler = function (i) {
    setData((prevdata) =>
      prevdata.map((todo) =>
        todo.id === i.id ? { ...todo, enableEditing: !i.enableEditing } : todo
      )
    );
  };

  const deleteHandler = function (i) {
    const newDeleted = data.filter((e) => e.id !== i.id);
    setData(newDeleted);
  };

  const updateNewValue = function (i) {
    if (update.length === 0) {
      setData((prevdata) =>
        prevdata.map((todo) =>
          todo.id === i.id ? { ...todo, enableEditing: !i.enableEditing } : todo
        )
      );
    }
    setData((prevdata) =>
      prevdata.map((todo) =>
        todo.id === i.id
          ? { ...todo, title: update, enableEditing: false }
          : todo
      )
    );
  };

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
              {i.enableEditing ? (
                <form>
                  <input
                    type="text"
                    className="enable-input"
                    onChange={(e) => setUpdated(e.target.value)}
                    autoFocus
                  />
                  <button onClick={() => updateNewValue(i)}>update</button>
                </form>
              ) : (
                <h2>{i.title}</h2>
              )}
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
