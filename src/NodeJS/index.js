import { MongoClient } from "mongodb";
import express from "express";
const app = express();

// MongoDB setup
const uri =
  "mongodb+srv://santigugon:s2ruXGEIFDYQ6oJg@supereasycluster.lzb2ugu.mongodb.net/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Express route
app.get("/", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("algoStructures");
    const accounts = database.collection("accounts");
    const accountData = await accounts.find().toArray();
    res.json(accountData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching data");
  } finally {
    await client.close();
  }
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
