import "./roadmap.css";
import { Level } from "./components/Level";

export function RoadMap() {
  return (
    <>
      <div className="roadMap-body">
        <h1 style={{ color: "black" }}>Algo-Structures</h1>
        <div className="title">
          <h1 style={{ color: "black" }}>Algorithms</h1>
        </div>
        <div className="roadMap-gallery">
          <Level
            name="MergeSort"
            img="https://willrosenbaum.com/assets/img/2022f-cosc-311/merge-sort.gif"
            relevance={1}
          />
          <Level
            name="MergeSort"
            img="https://static.javatpoint.com/tutorial/daa/images/daa-merge-sort.png"
            relevance={2}
          />
          <Level
            name="MergeSort"
            img="https://static.javatpoint.com/tutorial/daa/images/daa-merge-sort.png"
            relevance={2}
          />
          <Level
            name="MergeSort"
            img="https://static.javatpoint.com/tutorial/daa/images/daa-merge-sort.png"
            relevance={1}
          />
          <Level
            name="MergeSort"
            img="https://willrosenbaum.com/assets/img/2022f-cosc-311/merge-sort.gif"
            relevance={3}
          />
          <Level
            name="MergeSort"
            img="https://static.javatpoint.com/tutorial/daa/images/daa-merge-sort.png"
            relevance={3}
          />
        </div>
      </div>
    </>
  );
}
