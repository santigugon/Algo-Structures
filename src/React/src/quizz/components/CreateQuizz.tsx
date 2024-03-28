import { useState } from "react";
import axios from "axios";

function QuestionForm() {
  const [description, setDescription] = useState("");
  const [alternatives, setAlternatives] = useState([
    { text: "", isCorrect: false },
  ]);
  const [idDSA, setIdDSA] = useState("");

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleIdDSAChange = (e) => {
    setIdDSA(e.target.value);
  };

  const handleAlternativeTextChange = (index, event) => {
    const newAlternatives = alternatives.map((alternative, altIndex) => {
      if (index !== altIndex) return alternative;
      return { ...alternative, text: event.target.value };
    });

    setAlternatives(newAlternatives);
  };

  const handleAlternativeIsCorrectChange = (index, event) => {
    const newAlternatives = alternatives.map((alternative, altIndex) => {
      if (index !== altIndex) return alternative;
      return { ...alternative, isCorrect: event.target.checked };
    });

    setAlternatives(newAlternatives);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/questions", {
        description,
        alternatives,
        idDSA,
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };

  const addAlternative = () => {
    setAlternatives(alternatives.concat([{ text: "", isCorrect: false }]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
      </div>

      <div>
        <label>
          ID DSA:
          <input type="text" value={idDSA} onChange={handleIdDSAChange} />
        </label>
      </div>

      {alternatives.map((alternative, index) => (
        <div key={index}>
          <label>
            Alternative {index + 1} Text:
            <input
              type="text"
              value={alternative.text}
              onChange={(e) => handleAlternativeTextChange(index, e)}
            />
          </label>
          <label>
            Correct:
            <input
              type="checkbox"
              checked={alternative.isCorrect}
              onChange={(e) => handleAlternativeIsCorrectChange(index, e)}
            />
          </label>
        </div>
      ))}

      <button type="button" onClick={addAlternative}>
        Add Alternative
      </button>
      <button type="submit">Submit Question</button>
    </form>
  );
}

export default QuestionForm;
