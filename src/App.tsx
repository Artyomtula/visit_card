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

function App() {
  return (
    <>
      <MainPage />
      <WhoIsI />
      <MyMission />
      <Achivments />
      <TitleSkills />
      <Skills />
      <WhyI />
      <Question />
    </>
  );
}

export default App;
