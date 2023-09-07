import { useAtom } from "jotai";
import "./App.css";
import { Atomdata } from "./jotai/JotaiData";
import { useState } from "react";
import { BiCircle } from "react-icons/bi";

function App() {
  const [data, setData] = useAtom(Atomdata);
  const [input, setInput] = useState("");

  const formHandler = function (e) {
    e.preventDefault();
    console.log(input);
    setData([
      ...data,
      {
        id: Math.random(),
        status: false,
        title: input,
      },
    ]);
    setInput("");
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
            <div key={i.id} className="todo-item">
              <h2>{i.title}</h2>
              <div>
                <BiCircle className="icon" />
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
