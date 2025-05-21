import type { FC } from "react";
import cl from "./Hero.module.css";

import mainPhoto from "../../../assets/images/main-photo.png";
import arrow from "../../../assets/images/arrow.svg";
import circle from "../../../assets/images/l.svg";
import play from "../../../assets/images/play.svg";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className={cl.container}>
      <img className={cl.photo} src={mainPhoto}></img>
      <div className={cl.text}>
        <div className={cl.firstLine}>
          <h1 className={cl.title}>Привет!</h1>
          <img className={cl.arrow} src={arrow}></img>
        </div>
        <div className={cl.secondLine}>
          <h4 className={cl.smallText}>
            Здесь можно узнать больше <br />
            oбо мне, <br />
            моих навыках и достижениях
          </h4>
          <div className={cl.button}>
            <img className={cl.circle} src={circle}></img>

            <img className={cl.play} src={play}></img>
          </div>
          <h1>Я - Артем!</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
