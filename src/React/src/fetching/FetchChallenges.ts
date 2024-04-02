import { fetcher } from "./Fetcher.ts";
import useSWR from "swr";

const GetChallenges = (id: string) => {
  const {
    data: challenges,
    error,
    isValidating,
  } = useSWR(`http://localhost:3000/challenges/${id}`, fetcher);

  const response = {
    data: challenges,
    error: error,
    isValidating: isValidating,
  };
  return response;
};
export default GetChallenges;
