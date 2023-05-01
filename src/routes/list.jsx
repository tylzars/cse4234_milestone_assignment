import Header from './components/header'
import Footer from './components/footer'
import { DB } from '../assets/DB';
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const List = () => {
    const {user} = UserAuth();

    const [userTasks, setUserTasks] = useState([]); 
  
    useEffect(() =>{
      const loadData = async () =>{
        // Load tasks from api via our users uid
        const response = fetch('http://localhost:4000/api/tasks', { 
            method: 'POST', 
            mode: 'no-cors', 
            body: JSON.stringify(user.uid)
        });
        
        // Get back the data
        const temp_tasks = response.data;
        setUserTasks(temp_tasks);
  
      }
      loadData();
    });

    console.log(userTasks)

    function displayList() {
        let tasks = DB();
        let key;
        if (user === null) {
            key = "default";

            return(
                <div>
                    <h2>Example To Do List</h2>
                    <ul>
                        {tasks.map(element => {
                            return(
                                <li key={element.taskID}>
                                    <div>
                                        <p>Task: {element.name} Topic: {element.topic}</p>
                                        <p>Urgency: {element.priority} Due: {new Date(element.dueDate).toLocaleString()}</p>
                                        <p>Notes: <br/>{element.description}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }

        key = user.email;

        return(
            <div>
                <h2>{key}'s To Do List</h2>
                <ul>
                    {tasks.map(element => {
                        return(
                            <li key={tasks.indexOf(element)}>
                                <div>
                                    <p>Task: {element.name} Topic: {element.topic}</p>
                                    <p>Urgency: {element.priority} Due: {new Date(element.dueDate).toLocaleString()}</p>
                                    <p>Notes: <br/>{element.description}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
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
                    {displayList()}
                </section>
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

export default List;