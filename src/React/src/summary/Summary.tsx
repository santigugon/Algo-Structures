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
import { useLocation } from "react-router-dom";
import { TitleSummary } from "./components/TitleSummary.tsx";
import { DescriptionSummary } from "./components/DescriptionSummary.tsx";
import { AlgoComplexity } from "./components/AlgorithmsComplexity.tsx";
import { DifficultySummary } from "./components/DifficultySummary.tsx";

export function Summary() {
  const location = useLocation();
  const { category } = location.state as {
    category: string;
  };
  console.log(category);
  let information = new AlgoDS("", 0, "", "", [], [], "");
  if (category === "algorithm") {
    const { data } = location.state as {
      data: {
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
      {/* <div className="nes-container with-title is-centered">
        <p className="title">{title}</p>
        <p>{summary}</p>
      </div>
     

      <div className="nes-container is-rounded">
        <p>{description1}</p>
        <img src={imgSrc1} alt="" />
        <p>{description2}</p>
        <img src={imgSrc2} alt="" />
      </div> */}
    </>
  );
}
