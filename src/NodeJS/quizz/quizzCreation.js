import express from "express";
const router = express.Router();
import Question from "./schema.js";

function createQuizzQuestion() {
  router.post("/questions", async (req, res) => {
    try {
      const { description } = req.body;
      const { alternatives } = req.body;
      const { idDSA } = req.body;

      const question = await Question.create({
        description,
        alternatives,
        idDSA,
      });

      return res.status(201).json(question);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  });
}

function getQuizzQuestions() {
  router.get("/questions/:idDSA", async (req, res) => {
    try {
      const { idDSA } = req.params;
      const questions = await Question.find({ idDSA });
      return res.status(200).json(questions);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  });
}

router.get("/example", (req, res) => {
  res.send("Hello World!");
});

createQuizzQuestion();
getQuizzQuestions();

export default router;
