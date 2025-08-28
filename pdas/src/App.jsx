import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css"; // Assuming you have a CSS file for styles

import alexaImg from "./assets/alexa.png";
import cortanaImg from "./assets/cortana.png";
import siriImg from "./assets/siri.png";

export const App = () => {
  return (
    <>
      <div className="main">
        <div>Personal Digital Assistans</div>
        <ProfileCard title="Alexa" handle="@alexa99" img={alexaImg} />
        <ProfileCard title="Cortana" handle="@cortana32" img={cortanaImg} />
        <ProfileCard title="Siri" handle="@siri01" img={siriImg} />
      </div>
    </>
  );
};
export default App;
