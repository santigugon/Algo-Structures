import "./roadmap.css";
import { Level } from "./components/Level";
interface Algo {
  name: string;
  portrait: string;
  relevance: number;
  category: string;
}

interface RoadMapProps {
  data: {
    data: Algo[];
    error: string;
    isValidating: boolean;
  };
}
export function RoadMap({ data }: RoadMapProps) {
  console.log(data);
  return (
    <>
      {data.isValidating ? (
        <div className="Loading">Loading...</div>
      ) : (
        !data.error && (
          <div className="roadMap-body">
            <h1 style={{ color: "black" }}>Algo-Structures</h1>
            <div className="title">
              <h1 style={{ color: "black" }}>Algorithms</h1>
            </div>
            <div className="roadMap-gallery">
              {data.data.map((algo: Algo) => {
                console.log(algo.category);
                return (
                  <Level
                    name={algo.name}
                    img={algo.portrait}
                    relevance={algo.relevance}
                    category={algo.category}
                    data={algo}
                  />
                );
              })}
              {/*               
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
              /> */}
            </div>
          </div>
        )
      )}
    </>
  );
}
