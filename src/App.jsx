import { useState } from "react"
import Button from "./components/Button"
import { useId } from "react"

const App = () => {
  const taskInputId = useId()

  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    setTasks([...tasks, newTask])

    setNewTask('')
  }

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  return (
    <>
      <h1>Todo List</h1>

      <form onSubmit={ handleSubmit }>
        <input 
          id={ taskInputId }
          name=""
          placeholder="Task description" 
          onChange={ handleChange }
          required
          type="text" 
          value={ newTask }
        />

        <Button>Save</Button>
      </form>

      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>

        { tasks.map((task) => (
          <li>{ task }</li>
        )) }
      </ul>
    </>
  )
}

export default App