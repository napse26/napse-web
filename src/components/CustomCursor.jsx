import { useEffect, useRef } from "react";
export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorTwoRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
      if (cursorTwoRef.current) {
        cursorTwoRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return <>
      <div ref={cursorRef} className="custom-cursor__cursor" />
      <div ref={cursorTwoRef} className="custom-cursor__cursor-two" />
    </>;
};
