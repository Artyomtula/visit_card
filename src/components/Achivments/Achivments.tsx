import type { FC } from "react";
import cl from "./Achivments.module.css";
interface AchivmentsProps {}

const Achivments: FC<AchivmentsProps> = () => {
  return (
    <div className={cl.container}>
      <h1>ДОСТИЖЕНИЯ</h1>
      <div className={cl.gridContainer}>
        <div className={cl.textCard}>
          <h3>Лучший по С++</h3>
          <p>
            на потоке в вузе (на основе <br />
            сдачи экзамена и количеству <br />
            набранных баллов)
          </p>
        </div>
        <div className={cl.imgCard}>
          <img></img>
        </div>
        <div className={cl.textCard}></div>
        <div className={cl.imgCard}></div>
        <div className={cl.textCard}></div>
        <div className={cl.imgCard}></div>
        <div className={cl.textCard}></div>
        <div className={cl.imgCard}></div>
        <div className={cl.textCard}></div>
        <div className={cl.imgCard}></div>
        <div className={cl.textCard}></div>
        <div className={cl.imgCard}></div>
      </div>
    </div>
  );
};

export default Achivments;
