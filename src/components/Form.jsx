// Form.jsx
import { useState } from "react";
import styles from "./Form.module.css";

function Form(props) {
  const [tarea, setTarea] = useState("");
  const [persona, setPersona] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarea.trim() === "" || persona.length <= 5) {
      setMensajeError(
        "Verifique los datos por favor. Ingrese una tarea y un nombre mayor a 5 caracteres"
      );
    } else {
      props.onSubmit(tarea, persona);
      setTarea("");
      setPersona("");
      setMensajeError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.content_input}>
          <label className={styles.label} htmlFor="tarea">
            Ingrese su tarea a realizar
          </label>
          <input
            value={tarea}
            type="text"
            onChange={(e) => setTarea(e.target.value)}
          />
          <label className={styles.label} htmlFor="persona">
            Persona a cargo:
          </label>
          <input
            value={persona}
            type="text"
            onChange={(e) => setPersona(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Crear
        </button>
      </form>
      {!tarea || persona.length <= 5 ? <p className={styles.msjerror}>{mensajeError}</p> : undefined}
    </div>
  );
}

export default Form;
