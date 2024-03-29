import { fetcher } from "./Fetcher.ts";
import useSWR from "swr";

const GetQuestions = (id: string) => {
  const {
    data: questions,
    error,
    isValidating,
  } = useSWR(`http://localhost:3000/questions/${id}`, fetcher);

  const response = {
    data: questions,
    error: error,
    isValidating: isValidating,
  };

  // Handles error and loading state
  // if (error) return <div className="failed">failed to load</div>;
  // if (isValidating) return <div className="Loading">Loading...</div>;

  return response;
};
export default GetQuestions;
