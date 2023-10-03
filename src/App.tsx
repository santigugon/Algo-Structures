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
        imgSrc="data:image/jpeg;base64,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"
        github="https://github.com/santigugon"
        linkedin="https://www.linkedin.com/in/santiago-gutiérrez-gonzalez-9b7615203/"
        technologies={["C++", "HTML", "CSS", "JS", "PHP"]}
        email="santigugon@gmail.com"
      />
      <CreatorCard
        name="Santiago Gutierrez"
        description=" Software Engineer student at the Tecnologico de Monterrey Guadalajara. Young enthusiast of learning new technologies and lover of outdoors."
        imgSrc="https://img.freepik.com/free-photo/close-up-shot-adorable-african-american-woman-has-broad-smile-wears-striped-t-shirt-being-good-mood-rests-cafeteria-with-best-friends-smiling-dark-skinned-young-female-poses-indoor_273609-2872.jpg"
        github="https://github.com/santigugon"
        linkedin="https://www.linkedin.com/in/santiago-gutiérrez-gonzalez-9b7615203/"
        technologies={["C++", "HTML", "CSS", "JS", "PHP"]}
        email="santigugon@gmail.com"
      />
      <CreatorCard
        name="Santiago Gutierrez"
        description=" Software Engineer student at the Tecnologico de Monterrey Guadalajara. Young enthusiast of learning new technologies and lover of outdoors."
        imgSrc="data:image/jpeg;base64,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"
        github="https://github.com/santigugon"
        linkedin="https://www.linkedin.com/in/santiago-gutiérrez-gonzalez-9b7615203/"
        technologies={["C++", "HTML", "CSS", "JS", "PHP"]}
        email="santigugon@gmail.com"
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
