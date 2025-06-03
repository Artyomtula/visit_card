import React, { useEffect, useRef, useState } from "react";
import cl from "./ParallaxImage.module.css";

interface Props {
  src: string;
  speed?: number;
  height?: string;
}

const ParallaxImage: React.FC<Props> = ({
  src,
  speed = 0.3,
  height = "80vh",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);
  const targetOffsetY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const relativeScroll = scrollTop - elementTop;
        targetOffsetY.current = relativeScroll * speed;
      }
    };

    const smoothAnimation = () => {
      setOffsetY((prev) => prev + (targetOffsetY.current - prev) * 0.5); // плавность
      requestAnimationFrame(smoothAnimation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    requestAnimationFrame(smoothAnimation);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={cl.wrapper} style={{ height }}>
      <img
        src={src}
        alt="parallax"
        className={cl.image}
        style={{ transform: `translateY(${offsetY}px)` }}
      />
    </div>
  );
};

export default ParallaxImage;
