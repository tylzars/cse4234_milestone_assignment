import Header from './components/header'
import Footer from './components/footer'
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const Detail = () => {
    const { user } = UserAuth();

    const [userDetailTask, setUserDetailTask] = useState(null); 
    const [defaultPage, setDefaultPage] = useState(true)


    useEffect(() => {
        const loadData = async () => {
            // Load task from api via our passed _id
            const current_url = window.location.href
            if (current_url.split('/').pop() === "") {
                setDefaultPage(true)
            } else {
                const custom_url = 'https://cse4234-milestone-node.onrender.com/api/task/' + current_url.split('/').pop()

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
                        setUserDetailTask(temp_tasks);
                    } else {
                        console.log("didn't update")
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
                setDefaultPage(false)
            }
        }
        loadData();
    }, [user]);

    function displayDetailTask() {
        return(
            <div>
                <h2>Welcome to detail.html!</h2>
                <h3>Example To Do List</h3>
                <ul>
                    {userDetailTask.map(element => {
                        return(
                            <li key={element.taskID}>
                                <div>
                                    <h4>Task: {element.taskName} </h4>
                                    <p>Topic: {element.taskCategory}</p>
                                    <p>Urgency: {element.taskUrgency}</p>
                                    <p>Due: {new Date(element.taskDueDate).toLocaleDateString()}</p>
                                    <p>Other Notes: {element.taskOtherNotes}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => window.location.href='/list'}>
                    Add updated task to list!
                </button>
                <button onClick={() => window.location.href='/list'}>
                    Return to list.html
                </button>
            </div>
        )
    }

    function displayExampleDetailTask() {
        return(
            <div>
                <h2>Welcome to detail.html!</h2>
                <h3>Example To Do List</h3>
                <ul>
                    <li>
                        <div>
                            <h4>Task: Example Task #1 </h4>
                            <p>Topic: Category #1</p>
                            <p>Urgency: High</p>
                            <p>Due: Month/Day/Year</p>
                            <p>Other Notes: Long Text Here</p>
                        </div>
                    </li>
                </ul>
                <button onClick={() => window.location.href='/list'}>
                    Add updated task to list!
                </button>
                <button onClick={() => window.location.href='/list'}>
                    Return to list.html
                </button>
            </div>
        )
    }

    return (
        <>
            {/* Store Start & Navbar */}
            <Header />

            <article>
                <section>
                    {!defaultPage && displayDetailTask()}
                    {defaultPage && displayExampleDetailTask()}
                </section>
            </article>

            {/* React Component for Footer */}
            <Footer />
        </>
    )
}

export default Detail;
