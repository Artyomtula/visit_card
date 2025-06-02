import "./App.css";
import "./fonts.css";
import MainPage from "./components/MainPage/MainPage";
import WhoIsI from "./components/WhoIsI/WhoIsI";
import MyMission from "./components/MyMission/MyMission";
import Achivments from "./components/Achivments/Achivments";
import TitleSkills from "./components/TitleSkills/TitleSkills";
import Skills from "./components/Skills/Skills";
import WhyI from "./components/WhyI/WhyI";
import Question from "./components/Question/Question";
import Photo1 from "./components/Photo1/Photo1";
import MyContacts from "./components/MyContacts/MyContacts";

import Photo3 from "./assets/photos/IMG_6836.jpeg";
import Photo2 from "./assets/photos/CdF412QwphQ.jpg";

function App() {
  return (
    <>
      <MainPage />
      <WhoIsI />
      <MyMission />
      <Achivments />
      <Photo1 src={Photo2} />
      <TitleSkills />
      <Skills />
      <Photo1 src={Photo3} />
      <WhyI />
      <Question />
      <MyContacts />
    </>
  );
}

export default App;
