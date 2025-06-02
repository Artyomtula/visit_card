import type { FC } from "react";
import cl from "./Photo1.module.css";

interface Photo1Props {
  src: string;
}

const Photo1: FC<Photo1Props> = ({ src }) => {
  return (
    <div className={cl.container}>
      <img className={cl.img} src={src}></img>
    </div>
  );
};

export default Photo1;
