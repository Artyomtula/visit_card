import type { FC } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          className={cl.firstFact}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>
        <motion.div
          className={cl.secondFact}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>
        <motion.div
          className={cl.thirdFact}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default SecondColumn;
