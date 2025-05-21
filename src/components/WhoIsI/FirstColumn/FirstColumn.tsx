import type { FC } from "react";
import cl from "./FirstColumn.module.css";

import Vector from "../../../assets/images/Vector_1.svg";
import BWPhoto from "../../../assets/images/IMG_7140__.jpg";
import Hover from "../../../assets/images/hover.svg";

interface FirstColumnProps {}

const FirstColumn: FC<FirstColumnProps> = () => {
  return (
    <div className={cl.firstColumn}>
      <div className={cl.title}>
        <h2 className={cl.text}>Кто я?</h2>
        <img className={cl.vector} src={Vector}></img>
      </div>
      <div className={cl.card}>
        <div className={cl.photo}>
          <img className={cl.bwPhoto} src={BWPhoto}></img>
          <img className={cl.hover} src={Hover}></img>
        </div>
        <div className={cl.subTitle}>
          <div className={cl.gap}>
            <h4>Артём Тюляков</h4>
            <h5>Frontend-разработчик</h5>
          </div>
          <div className={cl.circle}></div>
        </div>
      </div>
    </div>
  );
};

export default FirstColumn;
