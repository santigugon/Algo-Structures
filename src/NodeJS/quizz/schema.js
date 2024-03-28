import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  description: String,
  alternatives: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
        default: false,
      },
      idDSA: {
        type: String,
        required: true,
      },
    },
  ],
});
export default mongoose.model("Question", QuestionSchema);
