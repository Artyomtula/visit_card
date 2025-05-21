import { useState } from "react";
import "./App.css";
import "./fonts.css";
import MainPage from "./components/MainPage/MainPage";
import WhoIsI from "./components/WhoIsI/WhoIsI";
import MyMission from "./components/MyMission/MyMission";
import Achivments from "./components/Achivments/Achivments";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainPage />
      <WhoIsI />
      <MyMission />
      <Achivments />
    </>
  );
}

export default App;
