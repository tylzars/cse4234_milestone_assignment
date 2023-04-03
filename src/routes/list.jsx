import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'


function list() {
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
            {/* React Component for Footer */}
            <Footer />
        </>
    )
}

export default list;