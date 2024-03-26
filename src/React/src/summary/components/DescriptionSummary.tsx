interface DescriptionProps {
  description: string;
  imgSrc: string;
  position: number;
}

export function DescriptionSummary({
  imgSrc,
  description,
  position,
}: DescriptionProps) {
  return (
    <div
      className="centered-div"
      style={{
        justifyContent: position % 2 == 0 ? "flex-start" : "flex-end",
        flexDirection: position % 2 == 0 ? "row" : "row-reverse",
      }}
    >
      <div
        className={
          position % 2 == 0
            ? "nes-container with-title is-centered"
            : "nes-container is-dark with-title is-centered"
        }
        style={{ height: "fit-content", margin: "1rem", minWidth: "30%" }}
      >
        <p className="title"></p>
        <p>{description}</p>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="nes-container is-rounded centered-div"
            style={{
              margin: "1rem",
              width: "fit-content",
            }}
          >
            <img
              src={imgSrc}
              alt=""
              style={{ maxHeight: "90vh", maxWidth: "100%", minWidth: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
