import { fetcher } from "./Fetcher.ts";
import useSWR from "swr";

const GetAlgorithms = () => {
  const {
    data: algorithms,
    error,
    isValidating,
  } = useSWR("http://localhost:3000/algorithms", fetcher);

  const response = {
    data: algorithms,
    error: error,
    isValidating: isValidating,
  };

  // Handles error and loading state
  // if (error) return <div className="failed">failed to load</div>;
  // if (isValidating) return <div className="Loading">Loading...</div>;

  return response;
};
export default GetAlgorithms;
