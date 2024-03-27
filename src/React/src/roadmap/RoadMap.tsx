import "./roadmap.css";
import { Level } from "./components/Level";
import { VisualIntro } from "../home/Components/visualIntro";
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
        <VisualIntro />
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
            </div>
          </div>
        )
      )}
    </>
  );
}
