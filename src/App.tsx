// import { useEffect } from "react";
// import { CreatorCards } from "./creatorCard.tsx";
import { NavMenu } from "./menus/Nav.tsx";
import { Summary } from "./home/Presentation.tsx";
import { Intro } from "./home/Intro.tsx";
function App() {
  // const creators = [
  //   {
  //     name: "Juan",
  //     description: "Full Stack Developer",
  //     imgSrc:
  //       "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/07/mario-bros-png-sin-fondo.png?w=800&ssl=1",
  //     github: "https://github.com/santigugon",
  //     linkedin:
  //       "https://www.linkedin.com/in/santiago-gutiérrez-gonzalez-9b7615203/",
  //     email: "santigugon@gmail.com",
  //     technologies: ["JS", "CSS", "PHP", "HTML", " NODEJS", " REACT"],
  //   },
  //   {
  //     name: "Santiago",
  //     description:
  //       "Full Stack Developer, the story of my life is that I have always loved to program every day no matter what ",
  //     imgSrc:
  //       "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg",
  //     github: "https://github.com/santigugon",
  //     linkedin:
  //       "https://www.linkedin.com/in/santiago-gutiérrez-gonzalez-9b7615203/",
  //     email: "santigugon@gmail.com",
  //     technologies: ["JS", "CSS", "PHP", "HTML", " NODEJS", " REACT"],
  //   },
  // ];
  // const [count, setCount] = useState(0);
  return (
    <>
      <NavMenu />
      <Intro />
      <Summary />
      {/* <CreatorCards creators={creators} /> */}
      {/* // <Intro /> */}
    </>
  );
}

// function Intro() {
//   // function([string1, string2],target id,[color1,color2])

//   useEffect(() => {
//     function consoleText(words: string[], id: string, colors: string[]) {
//       if (colors === undefined) colors = ["#fff"];
//       let visible = true;
//       const con = document.getElementById("console");
//       let letterCount: number = 1;
//       let x = 1;
//       let waiting = false;
//       const target = document.getElementById(id);

//       if (target === null || con === null) return;
//       target.setAttribute("style", "color:" + colors[0]);
//       window.setInterval(function () {
//         if (letterCount === 0 && waiting === false) {
//           waiting = true;
//           target.innerHTML = words[0].substring(0, letterCount);
//           window.setTimeout(function () {
//             const usedColor = colors.shift();
//             const usedWord = words.shift();
//             if (usedColor === undefined || usedWord === undefined) return;
//             colors.push(usedColor);
//             words.push(usedWord);
//             x = 1;
//             target.setAttribute("style", "color:" + colors[0]);
//             letterCount += x;
//             waiting = false;
//           }, 800);
//         } else if (letterCount === words[0].length + 1 && waiting === false) {
//           waiting = true;
//           window.setTimeout(function () {
//             x = -1;
//             letterCount += x;
//             waiting = false;
//           }, 800);
//         } else if (waiting === false) {
//           target.innerHTML = words[0].substring(0, letterCount);
//           letterCount += x;
//         }
//       }, 120);
//       window.setInterval(function () {
//         if (visible === true) {
//           con.className = "console-underscore hidden";
//           visible = false;
//         } else {
//           con.className = "console-underscore";

//           visible = true;
//         }
//       }, 400);
//     }
//     consoleText(["AlgoStructures", "Algorithms & Data Structures"], "text", [
//       "tomato",
//       "rebeccapurple",
//       "lightblue",
//     ]);
//   }, []);
//   return (
//     <div className="console-container">
//       <span id="text"></span>
//       <div className="console-underscore" id="console">
//         &#95;
//       </div>
//     </div>
//   );
// }
export default App;
