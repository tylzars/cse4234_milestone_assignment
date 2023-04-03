import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'


function detail() {
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
            {/* React Component for Footer */}
            <Footer />
        </>
    )
}

export default detail;
