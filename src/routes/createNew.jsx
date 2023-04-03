function createNew() {
    return (
        <>
        <meta charSet="utf-8" />
        <title>Turtle Teams' To-do's</title>
        <link rel="stylesheet" href="myStyles.css" type="text/css" />
        {/* Store Start */}
        <header role="banner">
            <div>
            <h1>
                <img src="./turtle.png" alt="turle" width={50} height={50} style={{ verticalAlign: "middle" }}/>
                {" "}Welcome to Turtle Teams' Todos' List!{" "}
                <img src="./turtle.png" alt="turle" width={50} height={50} style={{ verticalAlign: "middle" }}/>
            </h1>
            </div>
            <ul className="user_navbar">
            <li>
                <a href="list.html">Login</a>
            </li>
            <li>
                <a href="list.html">Signup</a>
            </li>
            <li>
                <a href="index.html">Welcome (User)</a>
            </li>
            </ul>
        </header>
        <nav>
            <ul className="navbar">
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="list.html">List</a>
            </li>
            <li>
                <a href="detail.html">Details</a>
            </li>
            <li>
                <a href="createNew.html">Create New</a>
            </li>
            </ul>
        </nav>
        <article>
            <section>
            <h1>Welcome to createNew.html!</h1>
            </section>
            <form className="createNewListItem" action="./list.html" method="get">
            <label htmlFor="task_name">Task Name:</label>
            <input type="text" id="task_name" name="task_name" />
            <br />
            <label htmlFor="task_category">Task Category:</label>
            <input type="text" id="task_category" name="task_category" />
            <br />
            <label htmlFor="todo_date">Todo Date:</label>
            <input type="date" id="todo_date" name="todo_date" />
            <br />
            <label htmlFor="task_urgency">Task Urgency:</label>
            <input type="text" id="task_urgency" name="task_urgency" />
            <br />
            <br />
            <label htmlFor="textarea">Other Task Notes</label>
            <br />
            <textarea
                id="textarea"
                name="textarea"
                rows={7}
                cols={80}
                defaultValue={""}
            />
            <br />
            <input type="submit" defaultValue="Submit" />
            </form>
        </article>
        <div className="bottom">
            <p>
            This page should be tried in Safari, Google Chrome or Mozilla Firefox.
            </p>
        </div>
        <footer>Copyright Turtle Team 2023</footer>
        </>
    )
}

export default createNew;
