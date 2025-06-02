import type { FC } from "react";
import cl from "./Question.module.css";
import { motion } from "framer-motion";

import Union from "../../assets/images/Union.svg";
import Vector from "../../assets/images/Vector_12.svg";
import Smile from "../../assets/images/Smile_black.svg";
interface QuestionProps {}

const Question: FC<QuestionProps> = () => {
  return (
    <div className={cl.container}>
      <div className={cl.subContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img className={cl.union} src={Union}></img>
          <div className={cl.title}>
            <p className={cl.text}>
              ЕСЛИ ВЫ ОТВЕТИЛИ "ДА" ХОТЯ БЫ НА 2 ВОПРОСА - НАМ С ВАМИ ПО ПУТИ!
            </p>
            <img className={cl.vector} src={Vector}></img>
          </div>
        </motion.div>
        <motion.div className={cl.contacts}>
          <div className={cl.myContacts}>
            <p className={cl.contactsText}>МОИ</p>
            <p className={cl.contactsText}>КОНТАКТЫ</p>
          </div>
          <img className={cl.smile} src={Smile}></img>
        </motion.div>
      </div>
    </div>
  );
};

export default Question;
