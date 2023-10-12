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
  return (
    <div className="card locked">
      <h3>
        {" "}
        <title></title>
      </h3>
      <img src={imgSrc} alt={title} />
      <p>{description}</p>
      <h5>{progress}</h5>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export function OverviewContainer() {
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
        ;
      </div>
    </div>
  );
}
