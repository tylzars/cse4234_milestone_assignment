function detail() {
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
                <h1>Welcome to detail.html!</h1>
                <h3>Currently Selected Task Name!</h3>
                <p>Urgency: Urgent</p>
                <p>Due Date: Soon</p>
                <p>Category: Fun</p>
                <p>Other Notes: Lorem ipsum dolore!</p>
                <button onclick="window.location.href='list.html'">
                    Add updated task to list!
                </button>
                <button onclick="window.location.href='list.html'">
                    Return to list.html
                </button>
                </section>
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

export default detail;
