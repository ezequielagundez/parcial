// App.jsx
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Tarea from "./components/Tarea";

function App() {
  const [valores, setValores] = useState([]);
  const [autoId, setAutoId] = useState(0);

  const handleSubmit = (tarea, persona) => {
    setValores([...valores, { tarea, persona, id: autoId }]);
    setAutoId(autoId + 1);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {valores.map((valor) => (
        <Tarea key={valor.id} tarea={valor.tarea} persona={valor.persona} />
      ))}
    </>
  );
}

export default App;
