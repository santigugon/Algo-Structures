import { RoadMap } from "../roadmap/RoadMap.tsx";
import FetchAlgorithms from "../fetching/FetchAlgorithms.ts";

export function Algorithms() {
  return (
    <div>
      <RoadMap data={FetchAlgorithms()} />
    </div>
  );
}
