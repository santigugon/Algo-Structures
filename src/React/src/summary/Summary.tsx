interface SummaryProps {
  title: string;
  summary: string;
  description1: string;
  description2: string;
  imgSrc1: string;
  imgSrc2: string;
}

export function Summary({
  title,
  summary,
  description1,
  description2,
  imgSrc1,
  imgSrc2,
}: SummaryProps) {
  return (
    <>
      <div className="nes-container with-title is-centered">
        <p className="title">{title}</p>
        <p>{summary}</p>
      </div>
      <div className="nes-container is-rounded">
        <p>{description1}</p>
        <img src={imgSrc1} alt="" />
        <p>{description2}</p>
        <img src={imgSrc2} alt="" />
      </div>
    </>
  );
}
