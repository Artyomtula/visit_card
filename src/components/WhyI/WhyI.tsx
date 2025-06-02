import type { FC } from "react";
import cl from "./WhyI.module.css";
import { motion } from "framer-motion";

import Vector from "../../assets/images/Vector_8.svg";
interface WhyIProps {}

const WhyI: FC<WhyIProps> = () => {
  const advantages = [
    {
      namber: 1,
      title: "Любознательность",
      description: "Вам нужен студент, который горит учёбой и развитием?",
    },
    {
      namber: 2,
      title: "Активность",
      description:
        "Студент, которому интересно принимать участие в различных олимпиадах и конкурсах, представляя университет на выставках и фестивалях?",
    },
    {
      namber: 3,
      title: "Амбициозность",
      description:
        "Студент, который желает стать сильным специалистом в своей области?",
    },
    {
      namber: 4,
      title: "Лидерство",
      description:
        "Студент, собирающий вокруг себя таких же энтузиастов, готовых покорять мир?",
    },
  ];
  return (
    <div className={cl.container}>
      <motion.div
        className={cl.subContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={cl.title}>
          <span className={cl.text}>ПОЧЕМУ ВАМ НУЖЕН ИМЕННО Я?</span>
          <img className={cl.img} src={Vector}></img>
        </div>
        <div className={cl.characteristics}>
          {advantages.map((adv, idx) => {
            return (
              <div key={idx} className={cl.advantage}>
                <h4 className={cl.advNumber}>{adv.namber}</h4>
                <h2 className={cl.advTitle}>{adv.title}</h2>
                <h3 className={cl.advDescription}>{adv.description}</h3>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyI;
