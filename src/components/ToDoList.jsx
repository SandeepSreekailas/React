import React, {  useState } from 'react'

function ToDoList() {
    const [task, settask] = useState(["wake up", "eat", "play", "sleep"])
    const [newtask, addnewtask] = useState('')

    function handleTask(event) {
        addnewtask(event.target.value)
    }

    function addNewTask() {
        if (newtask.trim() !== "") {
            settask(t => [...t, newtask])
            addnewtask("")
        }
    }

    function deleteTask(index) {
        const updatedtask = task.filter((_, i) => i !== index)
        settask(updatedtask)

    }


    function moveUp(index) {
        settask(t => {
            if (index === 0) return t

            const updated = [...t];
            [updated[index], updated[index - 1]] =
                [updated[index - 1], updated[index]]

            return updated
        })
    }

    function moveDown(index) {
        settask(t => {
            if (index === t.length - 1) return t
            const updatedtasks = [...t];
                ;[updatedtasks[index], updatedtasks[index + 1]] =
                    [updatedtasks[index + 1], updatedtasks[index]]

            return updatedtasks
        })
    }



    return (
        <div>
            <h1>ToDoList</h1>
            <input type="text" placeholder='enter a task' value={newtask} onChange={handleTask} />&nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <ol>
                {task.map((tasks, index) =>
                    <li key={index}>{tasks} &nbsp;&nbsp;
                        <button onClick={() => deleteTask(index)}>🗑️</button>&nbsp;&nbsp;
                        <button onClick={() => moveUp(index)}>👆</button>&nbsp;&nbsp;
                        <button onClick={() => moveDown(index)}>👇</button>&nbsp;&nbsp;

                    </li>)}
            </ol>
        </div>
    )
}

export default ToDoList