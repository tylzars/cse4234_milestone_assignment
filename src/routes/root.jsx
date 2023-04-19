import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'

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
                    Turtles, like any other living being, can benefit from having a to-do list. Despite their slow pace, turtles lead active lives and have a variety of daily tasks that they must complete. For example, turtles need to eat, drink water, bask in the sun, and swim regularly. Moreover, turtles are known to be territorial and may require maintenance of their habitats. Depending on the species, they may also need grooming and medical attention. Keeping track of all these tasks and ensuring they are completed on time is important for the health and well-being of the turtle.
                </p>
                <p>
                    A to-do list can help a turtle owner remember all the tasks that need to be done for their turtle each day. Having a clear list of tasks and their deadlines can also help the owner stay organized and on top of their responsibilities, reducing the likelihood of forgetting important tasks. In addition, a to-do list can help a turtle owner keep track of their turtle's health and behavior. By recording tasks such as feeding times and water changes, the owner can identify any changes in the turtle's behavior that may indicate health problems. Overall, a to-do list can be a useful tool for turtle owners to ensure that their pet receives the care and attention they need to lead a happy and healthy life.
                </p>

                <img alt="Turtle To Do" src="./turtle_to_do.png" width={200} height={200} style={{ display: "block", margin: "auto" }}></img>
                </section>
            </article>
            {/* React Component for Footer */}
            <Footer />
        </>
    );
}


