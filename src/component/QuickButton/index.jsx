import React, { useState } from "react";
import "./style.css";
import { ChatIcon, QuickButton, TaskIcon } from "../../assets/icons";

export default function index() {
  const [showButtons, setShowButtons] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  console.log(selectedButton);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const handleButtonClick = (button) => {
    setShowButtons(false);

    // Jika yang diklik bukan Quick Button, tampilkan informasi
    if (button !== "Quick Button") {
      alert(`Button ${button} diklik!`);
      setSelectedButton(button);
    } else {
      setSelectedButton(null);
    }
  };

  return (
    <div className="relative flex items-center">
      <div>
        <img src={QuickButton} alt="chat button" className="w-[68px] h-[68px] cursor-pointer relative z-[10]" onClick={toggleButtons} />
      </div>

      <div className="bg-[#4f4f4f] rounded-full w-[60px] h-[60px] cursor-pointer z-[7] absolute -left-[5px] right-0 bottom-[7px]" onClick={() => alert("heo")}></div>

      {showButtons && (
        <div className="flex flex-row gap-[26px] absolute -left-[180px] animate-slide-in">
          <div>
            <img src={TaskIcon} alt="task button" className="w-[60px] h-[60px] cursor-pointer" onClick={() => handleButtonClick("Task")} />
          </div>
          <div>
            <img src={ChatIcon} alt="chat button" className="w-[60px] h-[60px] cursor-pointer" onClick={() => handleButtonClick("Chat")} />
          </div>
          {/* Add more buttons as needed */}
        </div>
      )}
    </div>
  );
}
