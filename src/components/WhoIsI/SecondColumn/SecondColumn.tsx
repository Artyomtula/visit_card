import type { FC } from "react";
import cl from "./SecondColumn.module.css";

interface SecondColumnProps {}

const SecondColumn: FC<SecondColumnProps> = () => {
  return (
    <div className={cl.secondColumn}>
      <div className={cl.flexContainer}>
        <div className={cl.firstStroke}>
          <div className={cl.fullGreen}>cтудент</div>
          <div className={cl.fullGreen}>программист</div>
          <div className={cl.borderGreen}>музыкант</div>
        </div>
        <div className={cl.secondStroke}>
          <div className={cl.fullWhite}>разработчик</div>
          <div className={cl.fullGreen}>лидер</div>
          <div className={cl.fullGreen}>капитан команды</div>
        </div>
        <div className={cl.thirdStroke}>
          <div className={cl.borderGreen}>гик</div>
          <div className={cl.fullGreen}>экстраверт</div>
          <div className={cl.fullGreen}>технарь</div>
        </div>
      </div>
      <div className={cl.factsAboutMe}>
        <div className={cl.firstFact}>
          <h4 className={cl.factTitle}>
            <em>Факт обо мне №1</em>
          </h4>
          <h2 className={cl.role}>Студент</h2>
          <p className={cl.factText}>
            Учусь на направлении 09.03.03 <br />
            <b>Прикладная информатика</b> в <br />
            "Орловском Государственном <br />
            Университете имени И. С. Тургенева"
          </p>
        </div>
        <div className={cl.secondFact}>
          <h4 className={cl.factTitle}>
            <em>Факт обо мне №2</em>
          </h4>
          <h2 className={cl.role}>Программист</h2>
          <p className={cl.factText}>
            после долгого поиска своего пути в <br />
            программировании я решил <br />
            сосредоточиться на фронтенд- <br />
            разработке
          </p>
        </div>
        <div className={cl.thirdFact}>
          <h4 className={cl.factTitle}>
            <em>Факт обо мне №3</em>
          </h4>
          <h2 className={cl.role}>Гик</h2>
          <p className={cl.factText}>
            Обожаю технику, гаджеты и <br />
            железки, активно внедряю новые <br />
            технологии и инновации в свои <br />
            сферы деятельности
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondColumn;
