import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { LuPanelLeftClose } from "react-icons/lu";
import { FiUser, FiMessageSquare } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { ContextApp } from "../utils/Context";


const services = [
  {
    title: 'Ovulation Inducation With Timed Intercourse',
    url: '',
  },
  {
    title: 'IUI - Intra Uterine Insemination',
    url: '',
  },
  {
    title: '  IVF - In Vitro Fertilization',
    url: '',
  },
  {
    title: 'Minimally Invasive Surgery',
    url: '',
  },
  {
    title: 'IVM - In Vitro Maturation Of Oocytes',
    url: '',
  },
  {
    title: 'Fertility Preservation',
    url: '',
  },
  {
    title: 'PGS - Pre Implantation Genetic Screening',
    url: '',
  },
  {
    title: 'Freezing/Vitrification',
    url: '',
  },
  // {
  //   title: 'PGD - Pre Implantation Genetic Diagnosis',
  //   url: '',
  // },

]
function LeftNav() {
  const { setShowSlide, showSlide, handleQuery, isDarkMode } =
    useContext(ContextApp);
  return (
    // top section
    <div
      className={
        !showSlide
          ? `h-screen ${
              isDarkMode ? "bg-[#1e1f20]" : "bg-[#f0f4f9]"
            } w-[300px]  hidden lg:flex items-center justify-between p-2 text-black flex-col translate-x-0`
          : "hidden"
      }
    >
      <div className="flex flex-col w-full">
        <img src="/oasis-logo.webp" alt="logo" className="w-24 mb-6" />
        <span
          className="border bg-gray-200 mt-4 text-gray-400 font-semibold px-4 py-3 rounded-full text-xs flex gap-4 items-center justify-center cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <AiOutlinePlus fontSize={18} />
          New Chat
        </span>
        {/* <span
          className="border border-gray-600  rounded px-3 py-[9px] flex items-center justify-center cursor-pointer"
          title="Close sidebar"
          onClick={() => setShowSlide(!showSlide)}
        >
          <LuPanelLeftClose />
        </span> */}
      </div>

      {/* middle section  */}
      <div className=" h-[80%] w-full p-2 flex items-start justify-start flex-col overflow-hidden overflow-y-auto text-sm scroll my-2">
        {/* msg  */}
       {services.map((item)=>(
           <span className={`rounded w-full py-3 px-2 text-xs my-2 flex gap-1 items-center justify-between cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'} hover:bg-gray-400  transition-all duration-300 overflow-hidden truncate whitespace-nowrap`}>
           <span className="flex gap-2 items-center justify-center text-base">
             <span className="text-sm font-semibold">{item.title}</span>
           </span>
         </span>
       )) 
       }
      </div>

      {/* bottom section  */}
      <div className="w-full border-t border-gray-600 flex flex-col gap-2 items-center justify-center p-2">
        <span className="rounded w-full py-2 px-2 text-xs flex gap-1 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300">
          {/* <span className="flex gap-1 items-center justify-center text-sm">
            <FiUser />
            Upgrade to Plus
          </span> */}
          {/* <span className="rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800">
            NEW
          </span> */}
        </span>
        <span className="rounded w-full py-2 px-2 text-xs flex gap-1 items-center justify-between cursor-pointer hover:bg-gray-800 transition-all duration-300">
          {/* <span className="flex gap-2 items-center justify-center text-sm font-bold">
            <img
              src="/user.jpeg"
              alt="user"
              className="w-8 h-8 object-cover rounded-sm"
            />
            Ritesh
          </span>
          <span className="rounded-md  px-1.5 py-0.5 text-xs font-medium uppercase text-gray-500">
            <SlOptions />
          </span> */}
        </span>
      </div>
    </div>
  );
}

export default LeftNav;
