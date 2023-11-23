import React, { useState } from "react";
import "./style.css";
import { ChatIcon, QuickButton, TaskIcon } from "../../assets/icons";

export default function index() {
  const [showButtons, setShowButtons] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  console.log(selectedButton);

  const handleButtonClick = (button) => {
    setShowButtons(false);

    // Jika yang diklik bukan Quick Button, tampilkan informasi
    if (button !== "Quick Button") {
      setSelectedButton(button);
    } else {
      setSelectedButton(null);
    }
  };

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="relative flex items-center">
      <div>
        <img src={QuickButton} alt="chat button" className="w-[68px] h-[68px] cursor-pointer z-[10]" onClick={toggleButtons} />
      </div>

      {showButtons && (
        <div className="flex flex-row gap-[26px] absolute -left-[180px] animate-slide-in" onAnimationEnd={() => !showButtons && setShowButtons(false)}>
          <div className="z-[2]">
            <img src={TaskIcon} alt="chat button" className="w-[60px] h-[60px] cursor-pointer" onClick={() => handleButtonClick("Task")} />
          </div>
          <div className="z-[2]">
            <img src={ChatIcon} alt="chat button" className="w-[60px] h-[60px] cursor-pointer" onClick={() => handleButtonClick("Chat")} />
          </div>
          {/* Add more buttons as needed */}
        </div>
      )}
    </div>
  );
}
