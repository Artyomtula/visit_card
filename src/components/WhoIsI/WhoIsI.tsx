import type { FC } from "react";
import cl from "./WhoIsI.module.css";
import FirstColumn from "./FirstColumn/FirstColumn";
import SecondColumn from "./SecondColumn/SecondColumn";

interface WhoIsIProps {}

const WhoIsI: FC<WhoIsIProps> = () => {
  return (
    <div className={cl.container} id="about-me">
      <FirstColumn />
      <SecondColumn />
    </div>
  );
};

export default WhoIsI;
