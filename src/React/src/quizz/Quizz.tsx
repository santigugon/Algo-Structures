import { useParams } from "react-router-dom";
import GetQuestions from "../fetching/FetchQuestions";
import { VisualIntro } from "../home/Components/visualIntro";
import knightLogo from "/src/assets/imgs/knightLogo.png";
interface Alternative {
  text: string;
  isCorrect: boolean;
}

interface Question {
  description: string;
  alternatives: Alternative[];
}

export function Quizz() {
  const { id, title } = useParams();
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
    <>
      <h1 style={{ textAlign: "center" }}> {title} Quiz</h1>
      <section className="nes-container" style={{ margin: "5px 15px" }}>
        {/* Assuming response.data is an array of questions */}
        {response.data.map((question: Question, index: number) => (
          <section key={index} className="message-list">
            <section
              className="message -left"
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <i className="nes-bcrikko" style={{ marginTop: "15px" }}></i>
              {/* Display each question here */}
              <div className="nes-balloon from-left">
                <p>{question.description}</p>
              </div>
            </section>
            {/* Render alternatives for each question */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <section
                className="message -right"
                style={{
                  display: "grid",
                  justifyContent: "flex-end",
                  gridTemplateColumns: "auto auto",
                }}
              >
                <div
                  className="nes-balloon from-right"
                  style={{ display: "grid" }}
                >
                  {question.alternatives.map(
                    (alternative: Alternative, altIndex: number) => (
                      <label style={{ display: "block" }}>
                        <input
                          type="radio"
                          className="nes-radio"
                          name={`answer_${index}`}
                          checked
                        />
                        <span key={altIndex}>{alternative.text}</span>
                      </label>
                    )
                  )}
                </div>
                <div></div>
                <div></div>
                <i className="nes-brcikko" style={{ width: "fit-content" }}>
                  {" "}
                  <img src={knightLogo} alt="" />
                </i>
              </section>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}
