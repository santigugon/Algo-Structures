import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface Alternative {
  text: string;
  isCorrect: boolean;
}

export const CreateQuizz: React.FC = () => {
  const [description, setDescription] = useState<string>("");
  const [alternatives, setAlternatives] = useState<Alternative[]>([
    { text: "", isCorrect: false },
  ]);
  const [idDSA, setIdDSA] = useState<string>("");

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleIdDSAChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIdDSA(event.target.value);
  };

  const handleAlternativeTextChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newAlternatives = alternatives.map((alternative, altIndex) => {
      if (index !== altIndex) return alternative;
      return { ...alternative, text: event.target.value };
    });

    setAlternatives(newAlternatives);
  };

  const handleAlternativeIsCorrectChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newAlternatives = alternatives.map((alternative, altIndex) => {
      if (index !== altIndex) return alternative;
      return { ...alternative, isCorrect: event.target.checked };
    });

    setAlternatives(newAlternatives);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    setAlternatives([...alternatives, { text: "", isCorrect: false }]);
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
};
