import { MongoClient } from "mongodb";
import { startServer } from "./auth0.js";
// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://santigugon:s2ruXGEIFDYQ6oJg@supereasycluster.lzb2ugu.mongodb.net/";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db("algoStructures");
    const movies = database.collection("accounts");

    // Query for a movie that has the title 'Back to the Future'
    const movie = await movies.find().toArray();

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
startServer();
