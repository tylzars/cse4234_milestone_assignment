function list() {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Turtle Teams' To-do's</title>
            <link rel="stylesheet" href="myStyles.css" type="text/css" />
            {/* Store Start */}
            <header role="banner">
                <div>
                <h1>
                    <img
                    src="assets/turtle.png"
                    alt="turtle"
                    width={50}
                    height={50}
                    style={{ verticalAlign: "middle" }}
                    />
                    Welcome to Turtle Teams' To-do's List!
                    <img
                    src="assets/turtle.png"
                    alt="turtle"
                    width={50}
                    height={50}
                    style={{ verticalAlign: "middle" }}
                    />
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
                <h2>To-do List</h2>
                <h3>Urgent Tasks</h3>
                <div className="list_element">
                    <p>Urgent Task 1</p>
                    <button onclick="window.location.href='detail.html'">Update</button>
                    <button onclick="window.location.href='detail.html'">Delete</button>
                    <br />
                    <p>Urgent Task 2</p>
                    <button onclick="window.location.href='detail.html'">Update</button>
                    <button onclick="window.location.href='detail.html'">Delete</button>
                    <br />
                    <p>Urgent Task 3</p>
                    <button onclick="window.location.href='detail.html'">Update</button>
                    <button onclick="window.location.href='detail.html'">Delete</button>
                    <br />
                </div>
                <h3>Not-Urgent Tasks</h3>
                <div className="list_element">
                    <p>Not-Urgent Task 1</p>
                    <button onclick="window.location.href='detail.html'">Update</button>
                    <button onclick="window.location.href='detail.html'">Delete</button>
                    <br />
                    <p>Not-Urgent Task 2</p>
                    <button onclick="window.location.href='detail.html'">Update</button>
                    <button onclick="window.location.href='detail.html'">Delete</button>
                    <br />
                    <p>Not-Urgent Task 3</p>
                    <button onclick="window.location.href='detail.html'">Update</button>
                    <button onclick="window.location.href='detail.html'">Delete</button>
                    <br />
                </div>
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

export default list;