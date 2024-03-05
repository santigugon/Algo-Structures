interface LevelProps {
  img: string;
  name: string;
}

export function Level({ img, name }: LevelProps) {
  return (
    <>
      <ul className="ul-roadmap" style={{}}>
        {name}

        {Array.from({ length: 9 }, (_, index) => (
          <li
            key={index}
            className={`li-roadmap li-${index}`}
            style={{
              position: "absolute",
              left:
                index === 1
                  ? "100%"
                  : index === 3
                  ? "-100%"
                  : index === 5
                  ? "100%"
                  : index === 6
                  ? "-100%"
                  : index === 7
                  ? "-100%"
                  : index === 8
                  ? "100%"
                  : "0",
              top:
                index === 2
                  ? "100%"
                  : index === 4
                  ? "-100%"
                  : index === 5
                  ? "100%"
                  : index === 6
                  ? "100%"
                  : index === 7
                  ? "-100%"
                  : index === 8
                  ? "-100%"
                  : "0",
              backfaceVisibility: "hidden",
              transformOrigin:
                index === 0
                  ? "none"
                  : index === 1
                  ? "left center"
                  : index === 2
                  ? "center top"
                  : index === 3
                  ? "left center"
                  : index === 4
                  ? "center bottom"
                  : index === 5
                  ? "right bottom"
                  : index === 6
                  ? "left bottom"
                  : index === 7
                  ? "left top"
                  : "none",
              transform:
                index === 0
                  ? "none"
                  : index === 1
                  ? ""
                  : index === 2
                  ? "rotateX(-180deg)"
                  : index === 3
                  ? "left center"
                  : index === 4
                  ? "center top"
                  : index === 5
                  ? "right bottom"
                  : index === 6
                  ? "left bottom"
                  : index === 7
                  ? "left top"
                  : "",
              width: "100%",
              height: "100%",
              transition: "transform 0.3s, filter 1s",
              background: "coral",
              filter: "grayscale(0.9)",
              backgroundImage: `url("${img}")`,
              backgroundSize: "300% 300%",
              backgroundPosition:
                index === 0
                  ? "center center"
                  : index === 1
                  ? "right center"
                  : index === 2
                  ? "center bottom"
                  : index === 3
                  ? "left center"
                  : index === 4
                  ? "center top"
                  : index === 5
                  ? "right bottom"
                  : index === 6
                  ? "left bottom"
                  : index === 7
                  ? "left top"
                  : "right top",
            }}
          >
            {index}
          </li>
        ))}
      </ul>
    </>
  );
}
