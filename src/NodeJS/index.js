import { MongoClient } from "mongodb";
import express from "express";
import { getAlgorithmsDS } from "./algorithmsDS.js";

const app = express();

// MongoDB setup
const uri =
  "mongodb+srv://santigugon:s2ruXGEIFDYQ6oJg@supereasycluster.lzb2ugu.mongodb.net/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const startDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to the database");
    return client.db("algoStructures");
  } catch (error) {
    console.error(error);
  }
};

const database = startDatabase();

// Express route
app.get("/algorithms", async (req, res) => {
  const db = await database;
  getAlgorithmsDS(db)(req, res);
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
