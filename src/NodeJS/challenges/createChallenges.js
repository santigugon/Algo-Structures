import express from "express";
const router = express.Router();
import Challenge from "./schema.js";

function createChallenges() {
  router.post("/challenges", async (req, res) => {
    try {
      const { title } = req.body;
      const { url } = req.body;
      const { idDSA } = req.body;

      const challenge = await Challenge.create({
        title,
        url,
        idDSA,
      });

      return res.status(201).json(challenge);
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  });
}
createChallenges();

export default router;
