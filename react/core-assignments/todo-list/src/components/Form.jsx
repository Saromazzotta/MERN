import React, { useState } from 'react'
// import styles from './FormComponent.module.css'

const Form = () => {

    const [tasks, setTasks] = useState({
        newTask: "",
    })

    const [tasksList, setTasksList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Succes")
        setTasksList([...tasksList, tasks])
        setTasks({
            newTask: ""
        })
    }

    const changeHandler = (e) => {
        setTasks({ ...tasks, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form action="" className="form col-mod-4 mx-auto mt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="newTask" className="form-control-sm" value={tasks.newTask} onChange={changeHandler} />
                </div>
                <button className="btn-primary mt-3">Add</button>
            </form>

            <div>
                {
                    tasksList.map((tasks, i) => (
                        <p key={i}>
                            <div className="checkbox">
                                <label htmlFor="">
                                    <input key={i} type="checkbox" className="strike" value={1} />{tasks.newTask}
                                </label>
                            </div>
                        </p>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Form