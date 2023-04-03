function navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/list">List</a>
                </li>
                <li>
                    <a href="/detail">Details</a>
                </li>
                <li>
                    <a href="/createNew">Create New</a>
                </li>
            </ul>
        </nav>
    )
}

export default navbar;