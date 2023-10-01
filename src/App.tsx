// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const x: number = 25;
  const y: number = x;
  const incredible: string = "Santi";
  console.log(x + " Hola " + y);
  return (
    <>
      <h1>is really {incredible}</h1>
      <h2>Hello World</h2>
      <Intro />
    </>
  );
}
function Intro() {
  // function([string1, string2],target id,[color1,color2])
  consoleText(["AlgoStructures", "Algorithms & Data Structures"], "text", [
    "tomato",
    "rebeccapurple",
    "lightblue",
  ]);

  function consoleText(words: string[], id: string, colors: string[]) {
    if (colors === undefined) colors = ["#fff"];
    let visible = true;
    const con = document.getElementById("console");
    let letterCount: number = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    if (target === null || con === null) return;
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          const usedColor = colors.shift();
          const usedWord = words.shift();
          if (usedColor === undefined || usedWord === undefined) return;
          colors.push(usedColor);
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 800);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(function () {
      if (visible === true) {
        con.className = "console-underscore hidden";
        visible = false;
      } else {
        con.className = "console-underscore";

        visible = true;
      }
    }, 400);
  }

  return (
    <div className="console-container">
      <span id="text"></span>
      <div className="console-underscore" id="console">
        &#95;
      </div>
    </div>
  );
}
export default App;
