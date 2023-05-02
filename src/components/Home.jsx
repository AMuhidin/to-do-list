import { Fragment, useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons"
import "bootstrap/dist/css/bootstrap.min.css"
import AddTask from "./AddTask"
import EditTask from "./EditTask"

const Home = ({ tasks, onSubmit, deleteTask, taskDone, addNewTask }) => {
  return (
    <div className="container">
      <br />
      {/* <EditTask addNewTask={addNewTask} /> */}
      <AddTask addNewTask={addNewTask} />

      <Fragment>
        {tasks.map((task, index) => (
          <div className="col taskBg" key={task.id}>
            <div className={task.status ? "done" : ""}>
              <span className="taskNumber">{index + 1}</span>
              <span className="taskTitle">{task.title}</span>
              {/* <span className="taskDescription">{task.description}</span> */}
              <div className="iconsWrap">
                <span onClick={(e) => taskDone(task.id)}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                {/* <span>
                  <FontAwesomeIcon icon={faPen} />
                </span> */}
                <span
                  onClick={() => {
                    console.log("Passing id:", task.id)
                    deleteTask(task.id)
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </Fragment>
    </div>
  )
}

export default Home
