import { useState } from "react"
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { v4 as uuidv4 } from "uuid"

import InputTaskFields from "./atom componets/InputTaskField"
import { useForm } from "react-hook-form"
const EditTask = ({ addNewTask }) => {
  const { handleSubmit, register } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    const id = uuidv4()

    addNewTask({ ...data, id })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row form-wrapper">
      <div className="col">
        {/* <span>Add New Task</span> */}
        {/* <div className="input-wrapper"> */}
        {/* <input {...register("id")} /> */}
        <input
          className="form-control form-control-lg"
          {...register("title")}
        />
      </div>
      {/* <input {...register("description")} /> */}
      {/* </div> */}
      <div className="col-auto">
        <button className="btn btn-lg btn-success mr-20" type="submit">
          Update
        </button>
        <button className="btn btn-lg btn-success" type="submit">
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditTask
