import mongoose from "mongoose";

const ChallengeSchema = new mongoose.Schema({
  title: String,
  url: String,
  idDSA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DSA",
    required: true,
  },
});

export default mongoose.model("Challenge", ChallengeSchema);
