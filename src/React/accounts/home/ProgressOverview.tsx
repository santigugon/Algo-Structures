import { useState } from "react";
interface SectionCardProps {
  title: string;
  description: string;
  progress: number;
  onClick: () => void;
  imgSrc: string;
}

export function SectionCard({
  title,
  description,
  progress,
  onClick,
  imgSrc,
}: SectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`card locked ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="lock-icon">
        <img src="../src/assets/img/icons/lock-icon.png" alt="lock" />
      </div>
      <h3>
        {" "}
        <title></title>
      </h3>
      <div className="sectionImage-container">
        <img className="sectionImage" src={imgSrc} alt={title} />
      </div>
      <p>{description}</p>
      <h5>Your progress:{progress}%</h5>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export function SectionsContainer() {
  return (
    <div className="home-overview">
      <div className="cards-container">
        <SectionCard
          title="Algorithms"
          description="Discover the most interesting algorithms, from searching to sorting"
          progress={100}
          onClick={function () {
            console.log("Clicked");
          }}
          imgSrc="https://www.freecodecamp.org/news/content/images/2022/11/laptop-gfe4d4bfc0_1280.png"
        />
        <SectionCard
          title="Algorithms"
          description="Discover the most interesting algorithms, from searching to sorting"
          progress={100}
          onClick={function () {
            console.log("Clicked");
          }}
          imgSrc="https://www.freecodecamp.org/news/content/images/2022/11/laptop-gfe4d4bfc0_1280.png"
        />
        <SectionCard
          title="Algorithms"
          description="Discover the most interesting algorithms, from searching to sorting"
          progress={100}
          onClick={function () {
            console.log("Clicked");
          }}
          imgSrc="https://www.freecodecamp.org/news/content/images/2022/11/laptop-gfe4d4bfc0_1280.png"
        />
      </div>
      <SectionCard
        title="Big O Notation"
        description="Read this introductory lesson to big = notation and learn how to analyze the performance of your algorithms."
        progress={100}
        onClick={function () {
          console.log("Clicked");
        }}
        imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210315032119/Untitled-300x229.png"
      />
    </div>
  );
}
