import Header from './components/header'
import Footer from './components/footer'
import { UserAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const Detail = () => {
    const { user } = UserAuth();

    const [userDetailTask, setUserDetailTask] = useState(null); 


    useEffect(() => {
        const loadData = async () => {
            // Load task from api via our passed _id
            const current_url = window.location.href
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
        }
        loadData();
    }, [user.uid]);

    console.log(userDetailTask)
    
    return (
        <>
            {/* Store Start & Navbar */}
            <Header />

            <article>
                <section>
                <h1>Welcome to detail.html!</h1>
                <h3>Currently Selected Task Name!</h3>
                <p>Urgency: Urgent</p>
                <p>Due Date: Soon</p>
                <p>Category: Fun</p>
                <p>Other Notes: Lorem ipsum dolore!</p>
                <button onClick={() => window.location.href='list.html'}>
                    Add updated task to list!
                </button>
                <button onClick={() => window.location.href='list.html'}>
                    Return to list.html
                </button>
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

export default Detail;
