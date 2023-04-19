import { UserAuth } from '../../context/AuthContext';

function header() {
    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error);
        }
      };

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
                    <a href="/login">Login/SignUp</a>
                </li>
                {/* Hide User unless logged in (lol p makes this format awfully */}
                {user?.email && <li><a href="/login">{user?.email}</a></li>} 
                <li>
                    <button onClick={handleSignOut}>Logout</button>
                </li>
            </ul>
        </header>
    )
}

export default header;