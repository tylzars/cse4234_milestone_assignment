import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'



//import React, { useRef, useEffect, useState } from 'react';

export default function Root() {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Turtle Teams' Todos'</title>
            <link rel="stylesheet" href="myStyles.css" type="text/css" />
            {/* Store Start */}
            <Header />

            {/* React Component for NavBar */}
            <NavBar />

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
            {/* React Component for Footer */}
            <Footer />
        </>
    );
}


