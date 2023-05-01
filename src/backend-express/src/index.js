const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');

// npm install express mongodb

// Setup App
const app = express();
app.use(express.json());

// MongoDB Connection
const uri = "mongodb+srv://tzars2019:iHdsXCBX62dNSUOg@cse4234-milestone-clust.ysexvq6.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

// Build an endpoint
app.get('/', (req, res) => {
    res.send(
        [
            {title: 'API Output'}
        ]
    );
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});

//console.log("fun")