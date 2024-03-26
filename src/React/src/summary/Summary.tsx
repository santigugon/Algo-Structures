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
import { Algorithm } from "../Classes/Algorithms.ts";
import { useLocation } from "react-router-dom";

export function Summary() {
  const location = useLocation();
  const { category } = location.state as {
    category: string;
  };
  console.log(category);
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
    const information = new Algorithm(
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
      {/* <div className="nes-container with-title is-centered">
        <p className="title">{title}</p>
        <p>{summary}</p>
      </div>
      <div className="nes-container is-rounded">
        <img src={portrait} alt="" style={{ maxWidth: "100%" }} />
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
