const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require('cors')

// npm install express mongodb cors

// Setup App
const app = express();
app.use(express.json());

const allowedOrigins = ['http://localhost:3000', 'http://localhost:4000'];
const corsOptions = {
    origin: allowedOrigins,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
  

// MongoDB Connection
const uri = "mongodb+srv://tzars2019:iHdsXCBX62dNSUOg@cse4234-milestone-clust.ysexvq6.mongodb.net/?retryWrites=true&w=majority";

// Build an endpoint
app.get("/", (req, res) => {
  res.send([{ title: "API Output" }]);
});

// Add CreateNew Endpoint
app.post('/api/createnew/', async (req, res) => {
    // Get data from request
    const { uid, taskName, taskCategory, taskDueDate, taskUrgency, taskOtherNotes } = req.body;
    console.log(uid, taskName)

    // Setup mongo connection
    const client = new MongoClient(uri);
    await client.connect()
    //console.log(client)

    // Connect to specific db
    const mongo_cluster = client.db('cse4234-milestone-tasks');
    
    // Insert new task with uid for user and other fields
    const response = await mongo_cluster.collection('user_tasks').insertOne({
        uid, taskName, taskCategory, taskDueDate, taskUrgency, taskOtherNotes
    });

    // Log response
    if(response) {
        console.log(response)
    }

    res.send("GOT SOEMTHING BACK")
});

// Get tasks endpoint
// manual curl with: curl -d '{"uid":"jHXzqrZxL8h4D4eThXPOgZjVNmw1"}' -H "Content-Type: application/json" -X POST localhost:4000/api/tasks
app.get('/api/tasks/:uid', async (req, res) => {
    const uid = req.params.uid;
  
    // Setup mongo connection
    const client = new MongoClient(uri);
    await client.connect()
  
    // Connect to specific db
    const mongo_cluster = client.db('cse4234-milestone-tasks');
  
    // Get all tasks for specific uid
    const tasks = await mongo_cluster.collection('user_tasks').find({uid: uid}).toArray();
  
    // If we get tasks, send back; else error
    if (tasks) {
      res.json(tasks);
    } else {
      res.sendStatus(404);
    }
  });
  

app.listen(4000, () => {
  console.log("Listening on port 4000");
});

//console.log("fun")
