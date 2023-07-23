import { useState } from "react";
import controlImg from "../assets/control.png";
import logoImg from "../assets/logo.png";
import Chart_fillImg from "../assets/Chart_fill.png";
import ChatImg from "../assets/Chat.png";
import UserImg from "../assets/User.png";
import CalendarImg from "../assets/Calendar.png";
import SearchImg from "../assets/Search.png";
import ChartImg from "../assets/Chart.png";
import FolderImg from "../assets/Folder.png";
import SettingImg from "../assets/Setting.png";


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fillImg },
    { title: "Inbox", src: ChatImg },
    { title: "Accounts", src: UserImg, gap: true },
    { title: "Schedule ", src: CalendarImg },
    { title: "Search", src: SearchImg },
    { title: "Analytics", src: ChartImg },
    { title: "Files ", src: FolderImg, gap: true },
    { title: "Setting", src: SettingImg },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue-900 min-h-screen4 p-5 pt-8 relative duration-300`}
      >
        <img
          src={controlImg}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logoImg}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 overflow-y-auto ">
        
      </div>
    </div>
  );
};
export default Sidebar;