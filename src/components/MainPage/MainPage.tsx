import type { FC } from "react";
import cl from "./MainPage.module.css";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  return (
    <section className={cl.container}>
      <Header />
      <Hero />
    </section>
  );
};

export default MainPage;
