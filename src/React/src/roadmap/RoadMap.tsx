import "./roadmap.css";
import { Level } from "./components/Level";

export function Test() {
  return (
    <>
      <div className="roadMap-body">
        <h1>Algo-Structures</h1>
        <div className="title">Algorithms</div>
        <div className="roadMap-gallery">
          <Level
            name="MergeSort"
            img="https://static.javatpoint.com/tutorial/daa/images/daa-merge-sort.png"
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
            img="https://static.javatpoint.com/tutorial/daa/images/daa-merge-sort.png"
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
