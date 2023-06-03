import { useState } from 'react'
let autoId = 0;
import './App.css'
import Form from './components/Form'
import Tarea from './components/Tarea'

function App() {
  const [tareas, setTareas] = useState([])


  const handleSubmit = (tarea,persona) => {
    setTareas([...tareas, { nombre: tarea,id: autoId++}])
    console.log( tarea, persona);
    
  }
 
  return (
    <>
     <Form onSubmit={handleSubmit} />
     {
          tareas.map(tarea => {
            return(
              <Tarea key={tarea.id} tarea={tarea.nombre}  persona={tarea.responsable} />
            )
          })
        }

      
    </>
  )
}

export default App
