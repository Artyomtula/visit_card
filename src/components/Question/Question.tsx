import type { FC } from "react";
import cl from "./Question.module.css";

import Union from "../../assets/images/Union.svg";
import Vector from "../../assets/images/Vector_12.svg";
interface QuestionProps {}

const Question: FC<QuestionProps> = () => {
  return (
    <div className={cl.container}>
      <div className={cl.subContainer}>
        <img className={cl.union} src={Union}></img>
        <div className={cl.title}>
          <p className={cl.text}>
            ЕСЛИ ВЫ ОТВЕТИЛИ "ДА" ХОТЯ БЫ НА 2 ВОПРОСА - НАМ С ВАМИ ПО ПУТИ!
          </p>
          <img src={Vector}></img>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Question;
