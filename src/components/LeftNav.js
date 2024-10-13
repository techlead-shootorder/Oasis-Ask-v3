import React, { useContext, useEffect, useState  } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ContextApp } from "../utils/Context";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

// import Login from "./Page/Login/Login";

import { BsSun, BsMoon } from "react-icons/bs";



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
function LeftNav() {

  const {
    
    showSlide,    
    isDarkMode,
    setIsDarkMode,
  
  } = useContext(ContextApp);
  const [location, setLocation] = useState(null);
  function handleToogle(){
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Reverse geocode to get city/country using an API like OpenStreetMap or Google
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();
        const city = data.address.city || data.address.town || data.address.village;
        const country = data.address.country;
        setLocation(`${city}, ${country}`);
      });
    } else {
      setLocation("Location not available");
    }
  }, []);

  const toggleButtonClass = `px-2 text-xl border border-gray-600 rounded-md ${!isDarkMode ? 'bg-gray-600 text-white' : 'bg-white'}`

  
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

      {/* middle section  */}
      <div className=" h-[80%] w-full p-2 flex items-start justify-start flex-col overflow-hidden overflow-y-auto text-sm scroll my-2">
        {/* msg  */}
       {services.map((item, index)=>(
           <span key={index} className={`rounded w-full py-3 px-2 text-xs my-2 flex gap-1 items-center justify-between cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'} hover:bg-gray-400  transition-all duration-300 overflow-hidden truncate whitespace-nowrap`}>
           <span className="flex gap-2 items-center justify-center text-base">
             <a href={item.url} rel="noreferrer" target="_blank" className="text-sm font-semibold">{item.title}</a>
           </span>
         </span>
       )) 
       }
      </div>

      {/* bottom section  */}
      <div className="mt-10 w-full border-t border-gray-600 flex flex-col gap-2 items-center justify-center p-2 absolute bottom-0">
      {/* <button className="bg-[#874487] text-white font-semibold w-full py-2 rounded-md text-sm mb-2">
          Ask OasisFertility
        </button> */}
        <div className="text-xs text-gray-500 font-semibold my-4">
          <a href="https://oasisindia.in/book-an-appointment/" className="bg-[#874487] text-white font-semibold w-full p-2 rounded-md text-sm mb-2 "> Book a Appointment</a>
        </div>
         {/* Display location */}
         <div className="text-xs text-gray-500">
          {location ? `Your location: ${location}` : "Detecting location..."}
        </div>
       
     
      </div>
    </div>
  );
}

export default LeftNav;
