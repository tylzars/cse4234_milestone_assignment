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
          <img src="/turtle.png" alt="turle" width={50} height={50} style={{ verticalAlign: "middle" }} />
          {" "}Welcome to Turtle Teams' Todos' List!{" "}
          <img src="/turtle.png" alt="turle" width={50} height={50} style={{ verticalAlign: "middle" }} />
        </h1>
        <p>This page should be tried in Safari, Google Chrome or Mozilla Firefox.</p>
      </div>
      <ul className="navbar">
        <div class="left">
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
        </div>
        <div class="right">
          {/* Hide User unless logged in (lol p makes this format awfully */}
          {user?.email && <li class="right"><a href="/login">User: {user?.email.substring(0, user?.email.lastIndexOf("@"))}</a></li>}

          {/* hide logout if you aren't logged in*/}
          {(user?.email) && <li class="right"><button onClick={handleSignOut}>Logout</button></li>}

          {/* Hide login button if you are already logged in */}
          {!(user?.email) && <li class="right"><a href="/login">Login/SignUp</a></li>}
        </div>
      </ul>
    </header>
  )
}

export default header;