import Header from './components/header'
import Footer from './components/footer'
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const List = () => {
    const { user } = UserAuth();

    const [userTasks, setUserTasks] = useState(null); 
  
    useEffect(() => {
        const loadData = async () => {
            // Load tasks from api via our users uid
            const custom_url = 'https://cse4234-milestone-node.onrender.com/api/tasks/' + user.uid
            await fetch(custom_url, { 
                method: 'GET', 
                mode: 'cors', 
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                // Get back the data

                if(data.length > 0){ 
                    const temp_tasks = data;
                    setUserTasks(temp_tasks);
                } else {
                    console.log("didn't update")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        loadData();
    }, [user.uid]);

    const deleteTask = async (taskId) => {
        console.log(taskId)
        const custom_url = `https://cse4234-milestone-node.onrender.com/api/${taskId}/delete`
        const response = await fetch(custom_url, { 
            method: 'PUT', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function displayList() {
        //const data = JSON.parse(userTasks)
        for(var item in userTasks) {
            console.log(userTasks[item])
        }

        return(
            <div>
                <h2>Example To Do List</h2>
                <ul>
                    {userTasks.map(element => {
                        return(
                            <li key={element.taskID}>
                                <div>
                                    <h4>Task: {element.taskName} </h4>
                                    <p>Topic: {element.taskCategory}</p>
                                    <p>Urgency: {element.taskUrgency}</p>
                                    <p>Due: {new Date(element.taskDueDate).toLocaleDateString()}</p>
                                    <button className="action_button" onClick={() => deleteTask(element._id)}>Delete</button>
                                    <a href={`/detail/${element._id}`}><button>Detail</button></a>
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
                    {userTasks && displayList()}
                </section>
            </article>

            {/* React Component for Footer */}
            <Footer />
        </>
    )
}

export default List;