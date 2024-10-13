import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { ContextApp } from "../utils/Context";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const services = [
  {
    title: 'Ovulation Inducation With Timed Intercourse',
    url: 'https://oasisindia.in/our-treatments/ovulation-induction-with-timed-intercourse/',
  },
  {
    title: 'IUI - Intra Uterine Insemination',
    url: 'https://oasisindia.in/our-treatments/iui-intra-uterine-insemination/',
  },
  {
    title: '  IVF - In Vitro Fertilization',
    url: 'https://oasisindia.in/our-treatments/ivf-in-vitro-fertilization/',
  },
  {
    title: 'Minimally Invasive Surgery',
    url: 'https://oasisindia.in/our-treatments/minimally-invasive-surgery/',
  },
  {
    title: 'IVM - In Vitro Maturation Of Oocytes',
    url: 'https://oasisindia.in/our-treatments/ivm-in-vitro-maturation-of-oocytes/',
  },
  {
    title: 'Fertility Preservation',
    url: 'https://oasisindia.in/our-treatments/fertility-preservation/',
  },
  {
    title: 'PGS - Pre Implantation Genetic Screening',
    url: 'https://oasisindia.in/our-treatments/pgs-pre-implantation-genetic-screening/',
  },
  {
    title: 'Freezing/Vitrification',
    url: 'https://oasisindia.in/our-treatments/freezing-vitrification/',
  },
  // {
  //   title: 'PGD - Pre Implantation Genetic Diagnosis',
  //   url: '',
  // },

]

function Mobile() {
  const { Mobile, setMobile, isDarkMode, setIsDarkMode } = useContext(ContextApp);
  

  function handleToggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  const toggleButtonClass = `px-2 text-xl border border-gray-600 rounded-md ${
    !isDarkMode ? "bg-gray-600 text-white" : "bg-white"
  }`;

  return (
    <div className="absolute left-0 top-0 w-full z-50 bg-black/40 flex justify-between items-start">
      <div
        className={
          Mobile
            ? "h-screen bg-[#f0f4f9] w-[300px] flex items-center justify-between p-2 text-white flex-col translate-x-0"
            : "hidden"
        }
      >
        {/* Top Section: Logo and New Chat */}
        <div className="flex flex-col w-full items-center">
          <img src="/oasis-logo.webp" alt="logo" className="w-24 mb-6" />
          <span
            className="border bg-gray-200 mt-4 text-gray-400 font-semibold px-4 py-3 rounded-full text-xs flex gap-4 items-center justify-center cursor-pointer"
            onClick={() => window.location.reload()}
          >
            <AiOutlinePlus fontSize={18} />
            New Chat
          </span>
        </div>

        {/* Services List */}
        <div className="h-[70%] w-full p-2 flex items-start justify-start flex-col overflow-hidden overflow-y-auto text-sm scroll my-2">
          {services.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`rounded w-full py-3 px-2 text-xs my-2 flex gap-1 items-center justify-between cursor-pointer ${
                isDarkMode ? "text-white" : "text-black"
              } hover:bg-gray-400 transition-all duration-300 overflow-hidden truncate whitespace-nowrap`}
            >
              <span className="flex gap-2 items-center justify-center text-base">
               
                <span className="text-sm font-semibold">{item.title}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Bottom Section: Dark Mode & Authentication */}
        <div className="w-full border-t border-gray-600 flex flex-col gap-2 items-center justify-center p-2">
          <SignedOut>
            <div className="flex gap-2 justify-center">
              <button className={toggleButtonClass} onClick={handleToggleDarkMode}>
                {isDarkMode ? <BsSun /> : <BsMoon />}
              </button>
              <SignInButton className="bg-[#874487] text-white px-4 py-2 rounded-md" />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex gap-2 justify-center">
              <button className={toggleButtonClass} onClick={handleToggleDarkMode}>
                {isDarkMode ? <BsSun /> : <BsMoon />}
              </button>
              <UserButton className="bg-gray-500 text-black px-4 py-2 rounded-md" />
            </div>
          </SignedIn>
        </div>
      </div>

      {Mobile && (
        <span
          className="border border-gray-600 text-white m-2 rounded px-3 py-[9px] flex items-center justify-center cursor-pointer"
          title="Close sidebar"
          onClick={() => setMobile(!Mobile)}
        >
          <MdClose />
        </span>
      )}
    </div>
  );
}

export default Mobile;
