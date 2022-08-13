import { useState, useEffect } from "react";

// Get window resize width
export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return windowWidth;
}
