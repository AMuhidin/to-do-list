// import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom"
import { Routes } from "react-router-dom"
import AddTask from "./components/AddTask"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "This is my first task for today",
      status: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is my second task for today",
      status: false,
    },
  ])

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => {
    console.log("Deleting task with id:", id)

    setTasks(tasks.filter((task) => task.id !== id))
    // setTasks(newTasks)
  }
  const taskDone = (id) => {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status }
      }
      return task
    })
    setTasks(newTask)
  }

  return (
    <div className="App">
      <br />
      <br />
      <h2>To Do List App</h2>
      {/* <AddTask addNewTask={addNewTask} /> */}
      <Home
        tasks={tasks}
        deleteTask={deleteTask}
        key={tasks.id}
        taskDone={taskDone}
        addNewTask={addNewTask}
      />
      {/* <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          {/* <Route path="/addTask" element={<AddTask />} /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </div>
  )
}

export default App
