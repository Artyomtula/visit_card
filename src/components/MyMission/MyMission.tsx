import type { FC } from "react";
import { motion } from "framer-motion";
import cl from "./MyMission.module.css";

import Vector from "../../assets/images/Vector_6.svg";
interface MyMissionProps {}

const MyMission: FC<MyMissionProps> = () => {
  return (
    <section className={cl.container}>
      <h5>Миссия</h5>
      <motion.div
        className={cl.mainText}
        initial={{ opacity: 0, x: -1 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
        <img className={cl.img} src={Vector}></img>
      </motion.div>
    </section>
  );
};

export default MyMission;
