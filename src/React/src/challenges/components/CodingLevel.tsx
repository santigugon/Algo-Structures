import React, { useState } from "react";
interface CodingLevelProps {
  title: string;
  url: string;
  completed: boolean;
}

export function CodingLevel({ title, url, completed }: CodingLevelProps) {
  const [checkbox, setCheckBox] = useState(completed);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckBox(e.target.checked);
    // You can also perform other actions on change here
  };
  return (
    <>
      <div
        className="nes-container"
        style={{
          margin: "10px",
        }}
      >
        <label style={{ display: "flex", justifyContent: "space-around" }}>
          <input
            onChange={handleChange}
            type="checkbox"
            className="nes-checkbox"
            checked={checkbox}
          />
          <span>{title}</span>
          <a href={url} target="_blank" rel="noreferrer noopener">
            <i className="nes-logo"></i>
          </a>
        </label>
      </div>
    </>
  );
}
