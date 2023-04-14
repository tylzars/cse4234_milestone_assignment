import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import userLists from "../assets/userLists.json"
import { UserAuth } from '../context/AuthContext'


function list() {
    const {user} = UserAuth();
    const key = user.displayName;
    var tasks = [];
    console.log(key);
    
    for (var prop in userLists) {
        if (prop === key) {
            tasks = userLists[prop.toString()];
            break;
        }
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
                    <div>
                        <h2>{key}'s To Do List</h2>
                        <ul>
                            {tasks.map(element => {
                                return(
                                <li>
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
                {/* <h2>To-do List</h2>
                <h3>Urgent Tasks</h3>
                <div className="list_element">
                    <p>Urgent Task 1</p>
                    <button onClick="window.location.href='detail.html'">Update</button>
                    <button onClick="window.location.href='detail.html'">Delete</button>
                    <br />
                    <p>Urgent Task 2</p>
                    <button onClick="window.location.href='detail.html'">Update</button>
                    <button onClick="window.location.href='detail.html'">Delete</button>
                    <br />
                    <p>Urgent Task 3</p>
                    <button onClick="window.location.href='detail.html'">Update</button>
                    <button onClick="window.location.href='detail.html'">Delete</button>
                    <br />
                </div>
                <h3>Not-Urgent Tasks</h3>
                <div className="list_element">
                    <p>Not-Urgent Task 1</p>
                    <button onClick="window.location.href='detail.html'">Update</button>
                    <button onClick="window.location.href='detail.html'">Delete</button>
                    <br />
                    <p>Not-Urgent Task 2</p>
                    <button onClick="window.location.href='detail.html'">Update</button>
                    <button onClick="window.location.href='detail.html'">Delete</button>
                    <br />
                    <p>Not-Urgent Task 3</p>
                    <button onClick="window.location.href='detail.html'">Update</button>
                    <button onClick="window.location.href='detail.html'">Delete</button>
                    <br />
                </div> */}
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