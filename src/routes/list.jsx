import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import { DB } from '../assets/DB';
import { UserAuth } from '../context/AuthContext';

function list() {
    const {user} = UserAuth();

    function displayList() {
        let key;
        let tasks = DB();
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

        key = user.displayName;

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
            {/* Store Start */}
            <Header />
            
            {/* React Component for NavBar */}
            <NavBar />

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

export default list;