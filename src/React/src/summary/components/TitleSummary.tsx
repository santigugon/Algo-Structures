interface TitleSummaryProps {
  title: string;
  summary: string;
  portrait: string;
}

export function TitleSummary({ title, summary, portrait }: TitleSummaryProps) {
  return (
    <>
      <div className="nes-container with-title is-centered">
        <p className="title">{title}</p>
        <p>{summary}</p>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="nes-container is-rounded"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
              width: "fit-content",
            }}
          >
            <img
              src={portrait}
              alt=""
              style={{ maxHeight: "90vh", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
