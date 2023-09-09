import { useAtom } from "jotai";
import "./App.css";
import { Atomdata } from "./jotai/JotaiData";
import { useState } from "react";
import {
  BiCircle,
  BiTrash,
  BiPencil,
  BiCheckCircle,
  BiSolidSend,
  BiAddToQueue,
} from "react-icons/bi";
import axios from "axios";

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
    console.log("testing branch");
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
    setUpdated("");
  };

  const updateNewValue = function (i) {
    if (update.length > 0) {
      setData((prevdata) =>
        prevdata.map((todo) =>
          todo.id === i.id
            ? { ...todo, title: update, enableEditing: false }
            : todo
        )
      );
    } else {
      setData((prevdata) =>
        prevdata.map((todo) =>
          todo.id === i.id ? { ...todo, enableEditing: false } : todo
        )
      );
    }
    setUpdated("");
  };

  const deleteHandler = function (i) {
    const newDeleted = data.filter((e) => e.id !== i.id);
    setData(newDeleted);
  };

  const apiHandler = async () => {
    const request = (await axios.get("https://www.boredapi.com/api/activity"))
      .data.activity;
    setData([
      {
        id: Math.random(),
        title: request,
        status: false,
        enableEditing: false,
      },
      ...data,
    ]);
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
          <button className="add-button">
            <BiSolidSend className="icon" />
          </button>
          <button className="add-button">
            <BiAddToQueue onClick={apiHandler} className="icon" />
          </button>
        </div>
        <div className="todo-list">
          {data.map((i) => (
            <div key={i.id} className={`todo-item ${i.status ? "done" : ""}`}>
              {i.enableEditing ? (
                <form>
                  <input
                    placeholder={i.title}
                    type="text"
                    className="enable-input"
                    onChange={(e) => setUpdated(e.target.value)}
                    autoFocus
                  />
                  <button
                    className="updateBtn"
                    onClick={() => updateNewValue(i)}
                  >
                    update
                  </button>
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
