import { useEffect, useState } from "react";

export function AnimationGif() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);
    if (isVisible) {
      document.body.style.overflow = "hidden";
      const nav = document.querySelector("nav");
      nav?.classList.add("hidden");
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);
  document.body.style.overflow = "auto";
  const nav = document.querySelector("nav");
  nav?.classList.remove("hidden");

  return (
    <>
      {isVisible && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 999,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "100%" }}
            src="/src/assets/imgs/theorywin-resized.gif"
            alt=""
          />
        </div>
      )}
    </>
  );
}
