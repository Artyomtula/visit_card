import type { FC } from "react";
import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import cl from "./Hero.module.css";

import mainPhoto from "../../../assets/images/main-photo.png";
import arrow from "../../../assets/images/arrow.svg";
import circle from "../../../assets/images/l.svg";
import play from "../../../assets/images/play.svg";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const photoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const photoStyle = {
    transform: `translateY(${scrollY * 0.5}px)`, // медленнее
    transition: "transform 0.05s linear",
  };

  const textStyle = {
    transform: `translateY(${scrollY * 0.2}px)`, // быстрее
    transition: "transform 0.05s linear",
  };
  return (
    <div className={cl.container}>
      <img
        ref={photoRef}
        className={cl.photo}
        src={mainPhoto}
        style={photoStyle}
      />

      <div ref={textRef} className={cl.text} style={textStyle}>
        <div className={cl.firstLine}>
          <motion.h1
            className={cl.title}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ originX: -1 }}
          >
            Привет!
          </motion.h1>
          <img className={cl.arrow} src={arrow}></img>
        </div>

        <div className={cl.secondLine}>
          <motion.h4
            className={cl.smallText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Здесь можно узнать больше <br />
            oбо мне, <br />
            моих навыках и достижениях
          </motion.h4>

          <div className={cl.button}>
            <img className={cl.circle} src={circle}></img>
            <img className={cl.play} src={play}></img>
          </div>

          <motion.h1
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            style={{ originX: -1 }}
          >
            Я - Артем!
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
