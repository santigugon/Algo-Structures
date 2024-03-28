import { useParams } from "react-router-dom";

export function Quizz() {
  const { id } = useParams();
  return <h2>{id} HOLA</h2>;
}
