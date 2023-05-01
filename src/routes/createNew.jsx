import React from 'react';
import { useState } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import { UserAuth } from '../context/AuthContext'


const CreateNew = () => {
    const { user } = UserAuth()
    const [taskName, setTaskName] = useState("");
    const [taskCategory, setTaskCategory] = useState("");
    const [taskDueDate, setTaskDueDate] = useState("");
    const [taskUrgency, setTaskUrgency] = useState("");
    const [taskOtherNotes, setTaskOtherNotes] = useState("");

  
    const createNewTask = async () =>{
      // Send Data to our express route
      console.log(user.uid, taskName, taskCategory, taskDueDate, taskUrgency, taskOtherNotes)

      // Reset all fields since old task is created
      setTaskName("");
      setTaskCategory("");
      setTaskDueDate("");
      setTaskUrgency("");
      setTaskOtherNotes("")
    }


    return (
        <>
            <meta charSet="utf-8" />
            <title>Turtle Teams' To-do's</title>
            <link rel="stylesheet" href="myStyles.css" type="text/css" />
            {/* Store Start & Navbar */}
            <Header />

            <article>
                <section>
                <h1>Welcome to createNew.html!</h1>
                </section>
                <form className="createNewListItem">
                    <label htmlFor="task_name">Task Name:</label>
                    <input type="text" id="task_name" name="task_name" value = {taskName} onChange={e => setTaskName(e.target.value)} required />
                    <br />

                    <label htmlFor="task_category">Task Category:</label>
                    <input type="text" id="task_category" name="task_category" value={taskCategory} onChange={e => setTaskCategory(e.target.value)} required />
                    <br />

                    <label htmlFor="todo_date">Todo Date:</label>
                    <input type="date" id="todo_date" name="todo_date" value={taskDueDate} onChange={e => setTaskDueDate(e.target.value)} required />
                    <br />

                    <label htmlFor="task_urgency">Task Urgency:</label>
                    <input type="text" id="task_urgency" name="task_urgency" value={taskUrgency} onChange={e => setTaskUrgency(e.target.value)} required />
                    <br />

                    <br />
                    <label htmlFor="textarea">Other Task Notes</label>
                    <br />

                    <textarea
                        id="textarea"
                        name="textarea"
                        rows={7}
                        cols={80}
                        value={taskOtherNotes}
                        onChange={e => setTaskOtherNotes(e.target.value)}
                    />
                    <br />

                    <input type="submit" defaultValue="Submit" onClick={createNewTask}/>
                </form>
            </article>
            <div className="bottom">
                <p>
                This page should be tried in Safari, Google Chrome or Mozilla Firefox.
                </p>
            </div>
            {/* React Component for Footer */}
            <Footer />
        </>
    )
}

export default CreateNew;
