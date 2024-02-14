import { Summary } from "./Components/Presentation.tsx";
import { Intro } from "./Components/Intro.tsx";

export function Home() {
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
      <Intro />
      <Summary />
      {/* <CreatorCards creators={creators} /> */}
      {/* <VisualIntro /> */}
    </>
  );
}
