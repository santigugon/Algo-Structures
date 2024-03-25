import { Summary } from "./Components/Presentation.tsx";
import { Intro } from "./Components/Intro.tsx";
import LoginButton from "../Account/LoginButton.tsx";
import LogoutButton from "../Account/LogoutButton.tsx";
import { useEffect } from "react";
import Profile from "../Account/UserInfo.tsx";
// import { CreatorCard } from "../extra/creatorCard.tsx";
// import { VisualIntro } from "./Components/visualIntro.tsx";

export function Home() {
  const creators = [
    {
      name: "Juan",
      description: "Full Stack Developer",
      imgSrc:
        "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/07/mario-bros-png-sin-fondo.png?w=800&ssl=1",
      github: "https://github.com/santigugon",
      linkedin:
        "https://www.linkedin.com/in/santiago-gutiérrez-gonzalez-9b7615203/",
      email: "santigugon@gmail.com",
      technologies: ["JS", "CSS", "PHP", "HTML", " NODEJS", " REACT"],
    },
    {
      name: "Santiago",
      description:
        "Full Stack Developer, the story of my life is that I have always loved to program every day no matter what ",
      imgSrc:
        "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg",
      github: "https://github.com/santigugon",
      linkedin:
        "https://www.linkedin.com/in/santiago-gutiérrez-gonzalez-9b7615203/",
      email: "santigugon@gmail.com",
      technologies: ["JS", "CSS", "PHP", "HTML", " NODEJS", " REACT"],
    },
  ];
  console.log(creators);
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);
  return (
    <>
      <Intro />
      <Summary />
      <LoginButton />
      <LogoutButton />
      <Profile />

      {/* <CreatorCard creators={creators} /> */}
      {/* <div className="under-construction">
        Currently under construction await for the official Launch in March 2024
        in the Algoritmia club or contact santigugon@gmail.com if you want to be
        part of the project
      </div> */}
      {/* <VisualIntro /> */}
    </>
  );
}
