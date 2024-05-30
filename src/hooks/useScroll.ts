import { useScroll as useFramerScroll } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const useScroll = ({
  delay = 1000,
  maxPosition,
}: {
  delay?: number;
  maxPosition?: number;
}) => {
  const scrollYposition = maxPosition || 150;
  const { scrollY, scrollX } = useFramerScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = useCallback(() => {
    if (scrollYposition < scrollY.get()) {
      setScrolled(true);
    }
    if (scrollYposition > scrollY.get()) {
      setScrolled(false);
    }
  }, [scrollY, scrolled]);

  useEffect(() => {
    let scrollTimer: any;

    const handleScroll = () => {
      clearTimeout(scrollTimer);
      setIsScrolling(true);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, delay);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [delay]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return {
    scrolled,
    scrollY,
    isScrolling,
    scrollX,
  };
};

export default useScroll;
