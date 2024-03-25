import { fetcher } from "./Fetcher.ts";
import useSWR from "swr";

const GetAlgorithms = () => {
  const {
    data: algorithms,
    error,
    isValidating,
  } = useSWR("http://localhost:3000/", fetcher);

  // Handles error and loading state
  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;
  console.log(algorithms);
  return (
    <h2>A</h2>
    // <div>
    //   {algorithms &&
    //     algorithms.map((algorithm: string, index: number) => (
    //       <p>
    //         {algorithm}
    //         {index}
    //       </p>
    //     ))}
    // </div>
  );
};
export default GetAlgorithms;
