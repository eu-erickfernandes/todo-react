import Button from "./components/Button"

const App = () => {
  return (
    <>
      <h1>Todo List</h1>

      <form>
        <input 
          id="" 
          name=""
          placeholder="Task description" 
          required
          type="text" 
        />

        <Button>Save</Button>
      </form>

      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </>
  )
}

export default App