// import { useEffect } from "react";
// import { CreatorCards } from "./creatorCard.tsx";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { NavMenu } from "./menus/Nav.tsx";
import { Algorithms } from "./algorithms/Algorithms.tsx";
import { Home } from "./home/Home.tsx";
import { Summary } from "./summary/Summary.tsx";
import { CreateQuizz } from "./quizz/components/CreateQuizz.tsx";
import { Quizz } from "./quizz/Quizz.tsx";
import { CreateChallenge } from "./challenges/components/CreateChallenge.tsx";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        {/* Define a default route using Navigate */}
        <Route path="/home" element={<Home />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/createQuizz/:id" element={<CreateQuizz />} />
        <Route path="/quizz/:id/:title" element={<Quizz />} />
        <Route path="/createChallenge/:id" element={<CreateChallenge />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}
{
  /* <CreatorCards creators={creators} /> */
}

export default App;
