function header() {
    return (
        <header role="banner">
            <div>
                <h1>
                    <img src="./turtle.png" alt="turle" width={50} height={50} style={{ verticalAlign: "middle" }}/>
                    {" "}Welcome to Turtle Teams' Todos' List!{" "}
                    <img src="./turtle.png" alt="turle" width={50} height={50} style={{ verticalAlign: "middle" }}/>
                </h1>
                <p>This page should be tried in safari, chrome or Mozila.</p>
            </div>
            <ul className="user_navbar">
                <li>
                    <a href="/list">Login</a>
                </li>
                <li>
                    <a href="/list">Signup</a>
                </li>
                <li>
                    <a href="Welcome(User)">Welcome (User)</a>
                </li>
            </ul>
        </header>
    )
}

export default header;