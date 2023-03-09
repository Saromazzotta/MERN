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

    const deleteHandler = (delIndex) => {
        const filterTasks = tasksList.filter((tasks, i) => {
            return i !== delIndex
        });
    setTasksList(filterTasks);
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
                tasksList.map((tasks, i) => {
                    return (
                        <div key={i}>
                            <div className="checkbox">
                                <input className="me-3" type="checkbox"></input><span>{tasks.newTask}</span>
                                <button className="btn-primary ms-3 mt-3" onClick={(e) => { deleteHandler(i) }} >Delete</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
)
}

export default Form