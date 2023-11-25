import SearchBar from "../SearchBar";
import ItemChatGroup from "../ItemChatGroup";
import StrokeLine from "../StrokeLine";
import ItemChatPersonal from "../ItemChatPersonal";

export default function BoxAllChat() {
  return (
    <div className="w-[508px] h-[526px] bg-white mb-3 rounded-md px-[20px]">
      <div className="flex justify-center">
        {/* Search Bar */}
        <SearchBar />
      </div>
      <ItemChatGroup />
      {/* Line */}
      <StrokeLine />
      <ItemChatGroup />
      <StrokeLine />
      <ItemChatGroup />
      <StrokeLine />
      <ItemChatPersonal />
    </div>
  );
}
