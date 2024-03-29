import { MongoClient } from "mongodb";
import express from "express";
import { getAlgorithmsDS } from "./algorithmsDS.js";

import mongoose from "mongoose";
import quizzRouter from "./quizz/quizzCreation.js";

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
    return ["null", "error"];
  }
};

const startMongooseClient = async () => {
  try {
    const mongooseClient = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the mongoose database");
    return mongooseClient;
  } catch (error) {
    console.error(error);
    return ["null", "error"];
  }
};

const database = await startDatabase();
await startMongooseClient();

// Express route
app.get("/algorithms", async (req, res) => {
  const db = database;
  getAlgorithmsDS(db)(req, res);
});
app.use("/quizz", quizzRouter);
// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
