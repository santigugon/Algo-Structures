// import { useEffect } from "react";
// import { CreatorCards } from "./creatorCard.tsx";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { NavMenu } from "./menus/Nav.tsx";
import { Algorithms } from "./algorithms/Algorithms.tsx";
import { Home } from "./home/Home.tsx";
import { Summary } from "./summary/Summary.tsx";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/algorithms" element={<Algorithms />} />
        {/* Define a default route using Navigate */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/summary"
          element={
            <Summary
              title="MergeSort"
              summary="MergeSort is a sorting algorithm"
              description1="Example example example"
              description2="Example example example"
              imgSrc1="/img/algorithms/mergesort.png"
              imgSrc2="/img/algorithms/mergesort.png"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
{
  /* <CreatorCards creators={creators} /> */
}

export default App;
