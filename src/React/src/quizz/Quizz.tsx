import { useParams } from "react-router-dom";
import GetQuestions from "../fetching/FetchQuestions";
import { VisualIntro } from "../home/Components/visualIntro";

interface Alternative {
  text: string;
  isCorrect: boolean;
}

interface Question {
  description: string;
  alternatives: Alternative[];
}

export function Quizz() {
  const { id } = useParams();
  const response = GetQuestions(id || "");
  console.log(response);

  // Check if data is still loading
  if (response.isValidating) {
    return <VisualIntro />;
  }

  // Check for errors
  if (response.error) {
    return <div>Error loading questions.</div>;
  }

  // Ensure data is available
  if (!response.data) {
    return <div>No questions available.</div>;
  }

  return (
    <section className="nes-container">
      {/* Assuming response.data is an array of questions */}
      {response.data.map((question: Question, index: number) => (
        <section key={index} className="message-list">
          <section className="message -left">
            <i className="nes-bcrikko"></i>
            {/* Display each question here */}
            <div className="nes-balloon from-left">
              <p>{question.description}</p>
            </div>
          </section>
          {/* Render alternatives for each question */}
          <section className="message -right">
            <div className="nes-balloon from-right">
              {question.alternatives.map(
                (alternative: Alternative, altIndex: number) => (
                  <label>
                    <input
                      type="radio"
                      className="nes-radio"
                      name="answer"
                      checked
                    />
                    <span key={altIndex}>{alternative.text}</span>
                  </label>
                )
              )}
            </div>
            <i className="nes-bcrikko"></i>
          </section>
        </section>
      ))}
    </section>
  );
}
