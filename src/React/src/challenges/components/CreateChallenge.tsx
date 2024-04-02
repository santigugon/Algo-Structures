import React, { useState, ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CreateChallenge: React.FC = () => {
  const { id } = useParams();
  const idDSA = id;
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const eraseValues = () => {
    setUrl("");
    setTitle("");
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/challenges", {
        title,
        url,
        idDSA,
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error posting question:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
      </div>
      <div>
        <label>
          url:
          <input type="text" value={url} onChange={handleUrlChange} />
        </label>
      </div>

      <button type="submit" onChange={eraseValues}>
        Submit Question
      </button>
    </form>
  );
};
