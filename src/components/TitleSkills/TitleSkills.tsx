import type { FC } from "react";
import cl from "./TitleSkills.module.css";
interface TitleSkillsProps {}

const TitleSkills: FC<TitleSkillsProps> = () => {
  return (
    <div className={cl.container}>
      <div className={cl.firstRow}>
        <span className={cl.dot}>•</span>
        <span className={cl.italic}>МОИ&nbsp;</span> СУПЕР СИЛЫ
        <span className={cl.dot}>•</span>
        <span className={cl.italic}>МОИ&nbsp;</span> СУПЕР СИЛЫ
        <span className={cl.dot}>•</span>
        <span className={cl.italic}>МОИ&nbsp;</span> СУПЕР СИЛЫ
        <span className={cl.dot}>•</span>
        <span className={cl.italic}>МОИ&nbsp;</span> СУПЕР СИЛЫ
      </div>
      <div className={cl.secondRow}>
        <span className={cl.dot}>•</span>
        <span className={cl.italic}>МОИ&nbsp;</span> СУПЕР СИЛЫ
        <span className={cl.dot}>•</span>
        <span className={cl.italic}>МОИ&nbsp;</span> СУПЕР СИЛЫ
        <span className={cl.dot}>•</span>
        <span className={cl.italic}>МОИ&nbsp;</span> СУПЕР СИЛЫ
        <span className={cl.dot}>•</span>
        <span className={cl.italic}>МОИ&nbsp;</span> СУПЕР СИЛЫ
      </div>
    </div>
  );
};

export default TitleSkills;
