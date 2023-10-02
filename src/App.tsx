// import { useEffect } from "react";
import { CreatorCard } from "./creatorCard.tsx";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <NavMenu />
      <CreatorCard
        name="Santiago Gutierrez"
        description=" Software Engineer student at the Tecnologico de Monterrey Guadalajara. Young enthusiast of learning new technologies and lover of outdoors."
        imgSrc="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
        github="https://github.com/santigugon"
        linkedin="https://www.linkedin.com/in/santiago-gutiérrez-gonzalez-9b7615203/"
        technologies={["C++", "HTML", "CSS", "JS", "PHP"]}
      />
      {/* // <Intro /> */}
    </>
  );
}
function NavMenu() {
  return (
    <nav>
      <img
        src="../src/assets/img/algostructures.png"
        alt="menu"
        className="menu-img nes-pointer"
      />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
      </ul>
      <div>ejemplo</div>
      <img
        className="user-icon nes-pointer"
        src="../src/assets/img/users-icon.png"
        alt="user icon"
      />
    </nav>
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
