import React from "react";
import type { FC } from "react";
import cl from "./Achivments.module.css";
import ph1 from "../../assets/photos/blue_red.jpg";
import ph2 from "../../assets/photos/GjbWy8V5N5s.jpg";
import ph3 from "../../assets/photos/noroot.png";
import ph4 from "../../assets/photos/noroot2.png";
import ph5 from "../../assets/photos/rVMrqsPrk4M_1.jpg";
import ph6 from "../../assets/photos/photo.jpg";
import Vector from "../../assets/images/Vector_4.svg";

interface AchivmentsProps {}

const aсhivments = [
  {
    title: "Лучший по С++",
    text: "на потоке в вузе (на основе сдачи экзамена и количеству набранных баллов)",
    img: ph1,
  },
  {
    title: 'Конкурс "Я в деле"',
    text: 'Победитель и призер конкурса "Я в деле" с проектом "Вжух!" - приложением по подбору подарков на основе ИИ. Капитан команды и главный разработчик',
    img: ph2,
  },
  {
    title: "WorldSkills",
    text: "Дважды призер регионального этапа WorldSkills по компетенции “Изготовление прототипов”",
    img: ph3,
  },
  {
    title: "Совладелец Фотостудии",
    text: "В 17 лет стал совладельцем одной из самых популярных фотостудий города - «fotozavod». Партнер ОГУ и ГАУ в проведении различных мероприятий.",
    img: ph4,
  },
  {
    title: "Спикер",
    text: "Проводил мастер-классы и практикумы по работе со студийным оборудованием",
    img: ph5,
  },
  {
    title: "Музыкант",
    text: "Играю на гитаре и барабанах, выступал в составе различных групп",
    img: ph6,
  },
];

const Achivments: FC<AchivmentsProps> = () => {
  return (
    <section className={cl.container} id="achivments">
      <div className={cl.title}>
        <h1>ДОСТИЖЕНИЯ</h1>
        <img src={Vector} className={cl.vector}></img>
      </div>
      <div className={cl.gridContainer}>
        {aсhivments.map((item, index) => {
          const row = Math.floor(index / 2);
          const isReverse = row === 1;
          return (
            <React.Fragment key={index}>
              {isReverse ? (
                <>
                  <div className={cl.imgCard}>
                    <img className={cl.img} src={item.img} alt={item.title} />
                  </div>
                  <div className={cl.textCardReverse}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className={cl.textCard}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <div className={cl.imgCard}>
                    <img className={cl.img} src={item.img} />
                  </div>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Achivments;
