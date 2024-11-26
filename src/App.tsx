import React, { useState } from "react";
import "./App.css";
import ButtonPanel from "./components/ButtonPanel";
import DynamicContent from "./components/DynamicContent";
import pkgPic from "./assets/packageImg.png";

const App: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<string>("");

  return (
    <div className="app-container">
      <div className="side-design">
        <h1>MPN Package Manager</h1>
        <img
          src={pkgPic}
          className="package-logo"
          alt="Package"
        />
      </div>

      <div className="content-area">
        <ButtonPanel setSelectedAction={setSelectedAction} />
        <DynamicContent selectedAction={selectedAction} />
      </div>
    </div>
  );
};

export default App;
