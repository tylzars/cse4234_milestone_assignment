//import React, { useRef, useEffect, useState } from 'react';

export default function Root() {
    return (
        <>
        <meta charSet="utf-8" />
        <title>Turtle Teams' Todos'</title>
        <link rel="stylesheet" href="myStyles.css" type="text/css" />
        {/* Store Start */}
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
                    <a href="list.html">Login</a>
                </li>
                <li>
                    <a href="list.html">Signup</a>
                </li>
                <li>
                    <a href="Welcome(User)">Welcome (User)</a>
                </li>
            </ul>
        </header>
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
        <article>
            <section>
            <h1>Welcome to index.html!</h1>
            <p>
                This is a website for users to keep track of thier upcoming to-do's from
                anywhere in the world! Login and start your list today!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </p>
            </section>
        </article>
        <footer>Copyright Turtle Team 2023</footer>
        </>
    );
}


