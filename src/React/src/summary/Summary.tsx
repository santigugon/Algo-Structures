// interface Algorithms {
//   name: string;
//   summary: string;
//   descriptions: string[];
//   imgSrcs: string[];
//   portrait: string;
//   timeComplexity: string;
//   inPlace: boolean;
//   stable: boolean;
// }
import { AlgoDS } from "../Classes/AlgoDS.ts";
import { Algorithm } from "../Classes/Algorithms.ts";
import { Link, useLocation } from "react-router-dom";
import { TitleSummary } from "./components/TitleSummary.tsx";
import { DescriptionSummary } from "./components/DescriptionSummary.tsx";
import { AlgoComplexity } from "./components/AlgorithmsComplexity.tsx";
import { DifficultySummary } from "./components/DifficultySummary.tsx";
import { AnimationGif } from "./components/TheoryWin.tsx";
import { useState } from "react";
import { CodingChallenges } from "../challenges/CodingChallenges.tsx";

export function Summary() {
  const location = useLocation();
  const [showGif, setShowGif] = useState(false);
  const { category } = location.state as {
    category: string;
  };
  let id = "-1";
  let information = new AlgoDS("", 0, "", "", [], [], "");
  if (category === "algorithm") {
    const { data } = location.state as {
      data: {
        _id: string;
        name: string;
        relevance: number;
        category: string;
        summary: string;
        descriptions: string[];
        imgSrcs: string[];
        portrait: string;
        avgTimeComplexity: string;
        worstTimeComplexity: string;
        inPlace: boolean;
        stable: boolean;
      };
    };

    id = data?._id;
    const {
      name,
      relevance,
      category,
      summary,
      descriptions,
      imgSrcs,
      portrait,
      avgTimeComplexity,
      worstTimeComplexity,
      inPlace,
      stable,
    } = data;
    information = new Algorithm(
      name,
      relevance,
      category,
      portrait,
      descriptions,
      imgSrcs,
      summary,
      inPlace,
      stable,
      avgTimeComplexity,
      worstTimeComplexity
    );
    console.log(location.state, information);
  }
  return (
    <>
      {showGif ? <AnimationGif /> : null}
      <TitleSummary
        title={information?.getName() || ""}
        summary={information?.getSummary() || ""}
        portrait={information?.getPortrait() || ""}
      />
      {information?.getDescriptions().map((description, index) => {
        return (
          <DescriptionSummary
            description={description}
            imgSrc={information?.getImgSrcs()[index] || ""}
            position={index}
          />
        );
      })}
      {information instanceof Algorithm ? (
        <AlgoComplexity
          avgTimeComplexity={information?.getAvgTimeComplexity() || ""}
          worstTimeComplexity={information?.getWorstTimeComplexity() || ""}
          inPlace={information?.getInPlace() || false}
          stable={information?.getStable() || false}
        />
      ) : null}
      <DifficultySummary difficulty={information?.getRelevance() || 0} />
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setShowGif(true);
        }}
        type="button"
        className="nes-btn is-success"
      >
        End level
      </button>
      <Link to={`/quizz/${id}/${information?.getName() || ""}`}>
        <a className="nes-btn" href="#">
          Quizz
        </a>
      </Link>
      <Link to={`/createQuizz/${id}`}>
        <a className="nes-btn" href="#">
          Create Quizz
        </a>
      </Link>
      <Link to={`/createChallenge/${id}`}>
        <a className="nes-btn is-primary" href="#">
          Create Challenge
        </a>
      </Link>

      <div style={{ margin: "20px" }}>
        <CodingChallenges id={id} />
      </div>
    </>
  );
}
