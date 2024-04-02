interface CodingLevelProps {
  title: string;
  url: string;
  completed: boolean;
}

export function CodingLevel({ title, url, completed }: CodingLevelProps) {
  return (
    <>
      <div
        className="nes-container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <label>
          <input type="checkbox" className="nes-checkbox" checked={completed} />
          <span>{title}</span>
          <a href={url} target="_blank">
            <i className="nes-logo"></i>
          </a>
        </label>
      </div>
    </>
  );
}
