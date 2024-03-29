import { MongoClient } from "mongodb";
import express from "express";
import { getAlgorithmsDS } from "./algorithmsDS.js";
import Question from "./quizz/schema.js";
import mongoose from "mongoose";
import quizzRouter from "./quizz/quizzCreation.js";

import cors from "cors";
// other imports

// Enable CORS for all routes and origins

const app = express();
app.use(cors());

// MongoDB setup
const uri =
  "mongodb+srv://santigugon:s2ruXGEIFDYQ6oJg@supereasycluster.lzb2ugu.mongodb.net/algoStructures";
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

app.use(express.json());

// Express route
app.get("/algorithms", async (req, res) => {
  const db = database;
  getAlgorithmsDS(db)(req, res);
});

app.get("/questions/:idDSA", async (req, res) => {
  try {
    const { idDSA } = req.params;
    const questions = await Question.find({ idDSA });
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
app.post("/questions", async (req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const { alternatives } = req.body;
    const { idDSA } = req.body;

    const question = await Question.create({
      description,
      alternatives,
      idDSA,
    });

    return res.status(200).json(question);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

app.use("/quizz", quizzRouter);
// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
