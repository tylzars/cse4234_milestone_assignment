import Header from './components/header'
import Footer from './components/footer'


function createNew() {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Turtle Teams' To-do's</title>
            <link rel="stylesheet" href="myStyles.css" type="text/css" />
            {/* Store Start & Navbar */}
            <Header />

            <article>
                <section>
                <h1>Welcome to createNew.html!</h1>
                </section>
                <form className="createNewListItem" action="./list.html" method="get">
                <label htmlFor="task_name">Task Name:</label>
                <input type="text" id="task_name" name="task_name" />
                <br />
                <label htmlFor="task_category">Task Category:</label>
                <input type="text" id="task_category" name="task_category" />
                <br />
                <label htmlFor="todo_date">Todo Date:</label>
                <input type="date" id="todo_date" name="todo_date" />
                <br />
                <label htmlFor="task_urgency">Task Urgency:</label>
                <input type="text" id="task_urgency" name="task_urgency" />
                <br />
                <br />
                <label htmlFor="textarea">Other Task Notes</label>
                <br />
                <textarea
                    id="textarea"
                    name="textarea"
                    rows={7}
                    cols={80}
                    defaultValue={""}
                />
                <br />
                <input type="submit" defaultValue="Submit" />
                </form>
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

export default createNew;
