import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    console.log("Saluditos a toda la bandera que se la sigue cotorreando");
  }, [todo]);

  function addHandler() {
    if (text.trim().length > 0) {
      const newTodo = [text.trim(), ...todo];
      setTodo(newTodo);
      setText("");
    }
  }

  function keyDown(event) {
    if (event.key == "Enter") {
      addHandler();
    }
  }

  function removeitem(index) {
    return () => {
      const filter = todo.filter((item, indexx) => index != indexx);
      setTodo(filter);
    };
  }

  return (
    <main className="text-[25px] bg-slate-800 flex flex-col min-h-screen text-cyan-50 p-7 justify-center items-center">
      <div>
        <input
          onChange={(event) => setText(event.target.value)} //Esto es para controlar el estado
          onKeyDown={keyDown}
          type="text"
          className="bg-white text-black"
          value={text} //Esto setea el estado en el input pa que se vea
        />
        <button
          onClick={addHandler}
          className="bg-red-400 ms-3 w-[100px] rounded-md"
        >
          Agregar
        </button>
      </div>
      <div className="mt-5">
        {todo.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between w-[400px] p-1"
            >
              <h1 className="">{item}</h1>
              <button
                onClick={removeitem(index)}
                className="bg-green-600 p-1 rounded-md"
              >
                Done
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
