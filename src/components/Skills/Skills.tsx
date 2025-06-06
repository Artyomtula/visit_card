import type { FC } from "react";
import cl from "./Skills.module.css";
import { motion } from "framer-motion";

import Vector from "../../assets/images/Vector_2.svg";
import Cpp from "../../assets/images/c++.png";
import Html from "../../assets/images/html.png";
import Adobe from "../../assets/images/creative-cloud.png";
import Blender from "../../assets/images/blender.png";
import TimeManagment from "../../assets/images/time-managment.svg";
import Leader from "../../assets/images/teamwork.svg";
import Thinking from "../../assets/images/Analitical-thinking.svg";
import Generation from "../../assets/images/idea-generation.svg";

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => {
  const hardSkills = [
    {
      text: "Языки программирования c++, javascript",
      img: Cpp,
    },
    {
      text: "Язык разметки, стилей: html,css",
      img: Html,
    },
    {
      text: "Пакет ADOBE: photoshop, illustrator, premiere pro",
      img: Adobe,
    },
    {
      text: "ПО для 3D-моделирования: blender",
      img: Blender,
    },
  ];
  const softSkills = [
    {
      text: "Усидчивость и тайм-менеджмент",
      img: TimeManagment,
    },
    {
      text: "Лидерство и умение работать в команде",
      img: Leader,
    },
    {
      text: "Творческое и аналитическое мышление",
      img: Thinking,
    },
    {
      text: "Генерация идей и адаптивтость",
      img: Generation,
    },
  ];
  return (
    <section className={cl.container} id="super-skills">
      <div className={cl.subContainer}>
        <motion.div
          className={cl.hardSkills}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={cl.title}>
            <span className={cl.text}>Hard-skills</span>
            <img src={Vector} className={cl.hsVector}></img>
          </div>
          <div className={cl.skills}>
            {hardSkills.map((skill, idx) => (
              <div key={idx} className={`${cl.circle} ${cl["circle1_" + idx]}`}>
                <p className={cl.skillText}>{skill.text}</p>
                <img src={skill.img} className={cl.circleImg}></img>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className={cl.softSkills}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={cl.title}>
            <span className={cl.text}>Soft-skills</span>
            <img src={Vector} className={cl.ssVector}></img>
          </div>
          <div className={cl.skills}>
            {softSkills.map((skill, idx) => (
              <div key={idx} className={`${cl.circle} ${cl["circle2_" + idx]}`}>
                <p className={cl.skillText}>{skill.text}</p>
                <img src={skill.img} className={cl.circleImg}></img>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
