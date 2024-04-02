import FetchChallenges from "../fetching/FetchChallenges.ts";
import { VisualIntro } from "../home/Components/visualIntro";
import { CodingLevel } from "./components/CodingLevel.tsx";
// import { CodingLevel } from "./components/CodingLevel.tsx";

interface levelProps {
  title: string;
  url: string;
  completed: boolean;
}
export function CodingChallenges({ id }: { id: string }) {
  const data = FetchChallenges(id);
  console.log(data);
  if (data.isValidating) {
    return <VisualIntro />;
  } else {
    return (
      <>
        {data.data.map((item: levelProps) => (
          <CodingLevel title={item.title} url={item.url} completed={true} />
        ))}
      </>
    );
  }
}
