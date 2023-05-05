# Turtle To-Do's

This application is a todo list built from a MERN (MongoDB, Express, React, Node) stack. The backend NodeJS server is hosted on [render.com](render.com) utilizing Express to control the various API endpoints for communicating with our MongoDB database. The frontend ReactJS application is deployed automatically to Netlify using CI/CD on the main branch of this repository. 

You can find the deployed application here: [https://cse4234-turtle-todo.netlify.app/](https://cse4234-turtle-todo.netlify.app/).

Firebase is used for user authentication with the ability to make an account via email/password, sign in with Google, or sign in with Facebook.

The testing account for the deployment is:
- Email: test@zars.me
- Password: test123

For grading, the following files can be found in these directories:
- Schema: [src/backend-express/src/milestone3_createDB.txt](src/backend-express/src/milestone3_createDB.txt)
- Data Population: [src/backend-express/src/database.json](src/backend-express/src/database.json)
- Database Integration: [detail.jsx](src/routes/detail.jsx), [createNew.jsx](src/routes/createNew.jsx), [list.jsx](src/routes/list.jsx)

Demo Video can be found [here](https://drive.google.com/file/d/1qTCmVQ7NndLj-FlAXAbInG8VHTII7JQf/view?usp=sharing).

Documentation can be found here: [docs/documentation.md](docs/documentation.md).

User Guide can be found [here](https://docs.google.com/presentation/d/17beiR3-4RANBiguyb5TBPt0pQkEiIjNzG_KaGDvhmdc/edit?usp=sharing).

The defualt boiler plate Create React App information is below...

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
