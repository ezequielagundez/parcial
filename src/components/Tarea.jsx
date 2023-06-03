import styles from "./Tarea.module.css";


function Tarea(props){

    return (
       <div className={styles.tarea_content}>
           <p className={styles.tarea}>Tarea:{props.tarea}</p>
           <p className={styles.persona}>Persona a Cargo{props.persona}</p>
       </div>
    )
}

export default Tarea