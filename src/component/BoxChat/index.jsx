import SearchBar from "../SearchBar";
import ItemChatGroup from "../ItemChatGroup";
import StrokeLine from "../StrokeLine";
import ItemChatPersonal from "../ItemChatPersonal";
import { ArrowBackIcon, CloseIcon } from "../../assets/icons";

export default function BoxChat() {
  return (
    <>
      <div className="w-[508px] h-[526px] bg-white mb-3 rounded-md">
        {/* Header Chat */}
        <div className="mt-[18px] mb-[26px] px-[20px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[14px]">
              {/* Icon */}
              <img
                src={ArrowBackIcon}
                alt="arrowbackicon"
                className="w-[16px] h-[16px]"
              />
              {/* Name chat */}
              <div>
                <span className="text-[16px] font-bold text-[#2F80ED]">
                  Fastvisa Support
                </span>
              </div>
            </div>
            {/* Close button */}
            <div>
              <img
                src={CloseIcon}
                alt="close icon"
                className="w-[14px] h-[14px]"
              />
            </div>
          </div>
        </div>
        <StrokeLine />
      </div>
    </>
  );
}
