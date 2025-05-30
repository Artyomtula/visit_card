import type { FC } from "react";
import cl from "./MyMission.module.css";

import Vector from "../../assets/images/Vector_6.svg";
interface MyMissionProps {}

const MyMission: FC<MyMissionProps> = () => {
  return (
    <div className={cl.container}>
      <h5>Миссия</h5>
      <div className={cl.mainText}>
        <h1>
          МОЯ ЦЕЛЬ - УЧИТЬСЯ, <br />
          РАЗВИВАТЬСЯ В <br />
          ПРОГРАММИРОВАНИИ,
          <br />
          ВНОСИТЬ ВКЛАД В<br />
          РАЗВИТИЕ ТЕХНОЛОГИЙ <br />
          И ЗАРАБАТЫВАТЬ
          <br />
          НА ЭТОМ
        </h1>
        <img src={Vector}></img>
      </div>
    </div>
  );
};

export default MyMission;
