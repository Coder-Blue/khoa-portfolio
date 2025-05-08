import { createContext, useEffect, useState, type ReactNode } from "react";

// @ts-expect-error
export const CursorContext = createContext();

export default function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBG, setCursorBG] = useState("default");

  useEffect(() => {
    const mobileViewportIsActive = window.innerWidth < 768;

    if (!mobileViewportIsActive) {
      function move(e: MouseEvent) {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      }

      window.addEventListener("mousemove", move);

      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  }, []);

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255,1)",
    },
  };

  function mouseEnterHandler() {
    setCursorBG("text");
  }

  function mouseLeaveHandler() {
    setCursorBG("default");
  }

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
}
