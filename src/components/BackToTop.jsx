import { useState, useEffect } from "react";
export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <a
    href="#top"
    onClick={scrollToTop}
    className={`scroll-to-target scroll-to-top ${visible ? "show" : ""}`}
    style={{
      display: visible ? "block" : "none",
      opacity: visible ? 1 : 0,
      transition: "all 0.3s ease-in-out"
    }}
    aria-label="Scroll to top of page"
  >
      <span className="scroll-to-top__wrapper">
        <span className="scroll-to-top__inner" />
      </span>
      <span className="scroll-to-top__text">Go Back Top</span>
    </a>;
};
