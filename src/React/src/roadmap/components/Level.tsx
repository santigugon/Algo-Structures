interface LevelProps {
  img: string;
  name: string;
}

export function Level({ img, name }: LevelProps) {
  return (
    <>
      <ul
        style={{
          width: "120px",
          height: "80px",
        }}
      >
        {name}
        {img}
        {Array.from({ length: 9 }, (_, index) => (
          <li
            key={index}
            style={{
              backgroundImage: `url("https://static.javatpoint.com/tutorial/daa/images/daa-merge-sort.png"})`,
            }}
          ></li>
        ))}
      </ul>
    </>
  );
}
