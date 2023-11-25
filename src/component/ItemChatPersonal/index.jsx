import { IconChatPersonal } from "../../assets/icons";

export default function ItemChatPersonal() {
  return (
    <>
      {/* Item Chat Personal */}
      <div className="mt-[26px] mb-[28px] flex">
        {/* Profle grup */}
        <div className="flex relative justify-center">
          <img
            src={IconChatPersonal}
            alt="asd"
            className="w-[34px] h-[34px] relative z-[2]"
          />
        </div>
        {/* RIght Content */}
        <div>
          {/* title and time */}
          <div className="ml-[20px] ">
            <div className="text-[12px] flex gap-[16px]">
              <span className="text-[#2F80ED] font-bold">
                109220-Naturalization
              </span>
              <span className="text-[#4F4F4F] font-medium">
                January 1, 2021 19:10
              </span>
            </div>

            {/* chat inbox */}
            <div className="text-[12px] flex flex-col mt-[4px]">
              {/* Sender */}
              <span className="text-[#4F4F4F] font-bold">Cameron Philips:</span>
              {/* Text */}
              <span>Please Check this out!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
