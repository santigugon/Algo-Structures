import { useState } from "react";
import { Link } from "react-router-dom";

interface SectionCardProps {
  title: string;
  description: string;
  progress: number;
  onClick: () => void;
  imgSrc: string;
  locked: boolean;
}

export function SectionCard({
  title,
  description,
  progress,
  onClick,
  imgSrc,
  locked,
}: SectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={`/algorithms`}>
      <div
        className={`card ${locked ? "locked" : ""} ${
          isHovered ? " hovered" : ""
        } ${title === "Big O Notation" ? "big-o-notation" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {locked ? (
          <div className="lock-icon">
            <img src="/img/icons/lock-icon.png" alt="lock" />
          </div>
        ) : (
          ""
        )}
        <h3>
          <title></title>
        </h3>
        <div className="sectionImage-container">
          <img className={`sectionImage `} src={imgSrc} alt={title} />
        </div>
        <p>{description}</p>
        <h5>Your progress:{progress}%</h5>
        <progress
          className={`nes-progress ${
            progress > 90
              ? "is-success"
              : progress > 50
              ? "is-warning"
              : "is-error"
          }`}
          value={progress}
          max="100"
        ></progress>

        <button onClick={onClick}>Click Me</button>
      </div>
    </Link>
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
          locked={true}
          imgSrc="/img/portraits/algorithms.png"
        />
        <SectionCard
          title="Algorithms"
          description="Learn about the most important data structures, from arrays to binary search trees"
          progress={70}
          onClick={function () {
            console.log("Clicked");
          }}
          locked={true}
          imgSrc="/img/portraits/datastructure.png"
        />
        <SectionCard
          title="Algorithms"
          description=" the most interesting algorithms, from searching to sorting"
          progress={30}
          onClick={function () {
            console.log("Clicked");
          }}
          locked={true}
          imgSrc="/img/portraits/storymode.png"
        />
      </div>
      <SectionCard
        title="Big O Notation"
        description="Read this introductory lesson to big O notation and learn how to analyze the performance of your algorithms."
        progress={0}
        onClick={function () {
          console.log("Clicked");
        }}
        locked={false}
        imgSrc="/img/portraits/bigOnotation.png"
      />
    </div>
  );
}
