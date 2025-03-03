import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext.jsx";
import {
  Menu,
  Search,
  Globe,
  ChevronRight,
  ToggleLeft,
  SearchIcon,
} from "lucide-react";
import AccountNav from "./AccountNav.jsx";

export default function Header() {
  const { user } = useContext(UserContext);
  const [showSearch, setShowSearch] = useState(true);

  const categories = [
    {
      name: "Rooms",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      name: "Icons",
      icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
    },
    {
      name: "New",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
      name: "Top cities",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
      name: "Caves",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "Beachfront",
      icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z",
    },
    {
      name: "Design",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    },
    {
      name: "Amazing pools",
      icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    },
    {
      name: "Mansions",
      icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowSearch(false); // Hide search bar when scrolling down
      } else {
        setShowSearch(true); // Show search bar when scrolling up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Fixed Header */}
      <header className="hidden md:flex fixed top-0 left-0 w-full bg-[#000] z-50 shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 -rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            <span className="font-bold text-xl">airbnb</span>
          </Link>

          {showSearch ? (
            <div className="ml-20 flex space-x-6">
              <button className="font-medium text-white">Homes</button>
              <button className="font-medium text-gray-400">Experiences</button>
            </div>
          ) : (
            <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
              <div>Anywhere</div>
              <div className="border-l border-gray-300"></div>
              <div>Any week</div>
              <div className="border-l border-gray-300"></div>
              <div>Add guests</div>
              <button className="bg-primary text-white p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
            
      
          )}

          <div className="flex items-center space-x-2">
            <button className="text-xs font-medium rounded-full py-2 hover:bg-neutral-800">
              Airbnb your home
            </button>
            <button className="rounded-full p-1 hover:bg-neutral-800">
              <Globe className="h-5 w-5" />
            </button>
            <Link
              to={user ? "/account" : "/login"}
              className="flex items-center hover:bg-neutral-800 space-x-2 rounded-full border border-neutral-700 p-1 pl-2 hover:shadow-md"
            >
              <Menu className="h-5 w-5" />
              <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="h-5 w-5 fill-current text-white"
                >
                  <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                </svg>
              </div>
              <div className="px-1 text-xs">
                {!!user && <div>{user.name}</div>}
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div className="md:hidden fixed top-0 left-0 w-full bg-black z-50 my-2 flex items-center justify-center">
        <div className="max-w-4xl mx-auto flex items-center justify-between rounded-full border border-neutral-800 p-2 shadow-sm">
          <div className="px-6 text-gray-400 flex gap-2 justify-center hover:bg-neutral-800 rounded-full">
            <SearchIcon className="w-5 h-6" />
            <div className="text-sm font-medium">Start your Search</div>
          </div>
        </div>
      </div>

      {/* Search Bar - Hidden on Scroll Down */}
      <div
        className={`fixed top-14 left-0 w-full bg-black transition-transform duration-300 ${
          showSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 hidden md:block bg-black">
          <div className="max-w-4xl mx-auto flex items-center justify-between rounded-full border border-neutral-800 p-2 shadow-sm">
            {[
              { title: "Where", subtitle: "Search destinations" },
              { title: "Check in", subtitle: "Add dates" },
              { title: "Check out", subtitle: "Add dates" },
              { title: "Who", subtitle: "Add guests" },
            ].map((item, index, arr) => (
              <div
                key={index}
                className={`px-6 py-2 flex flex-col justify-center hover:bg-neutral-800 rounded-full ${
                  index === 0 ? "flex-[1.5]" : "flex-1"
                } ${index !== arr.length - 1 ? "relative" : ""}`}
              >
                <div className="text-sm font-medium">{item.title}</div>
                <div className="text-gray-400 text-sm font-medium">
                  {item.subtitle}
                </div>
                {index !== arr.length - 1 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3/5 w-[1px] bg-neutral-800"></div>
                )}
              </div>
            ))}

            <button className="rounded-full bg-[#FF385C] hover:bg-[#E31C5F] h-12 w-12 flex items-center justify-center">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Categories Section */}
      <div
        className={`${
          showSearch ? "md:top-[10rem] top-[5rem]" : "top-[3rem]"
        } fixed left-0 w-full bg-black z-50 shadow-md`}
      >
        <div className="md:container mx-auto px-4 py-6">
          <div className="relative">
            <div className="flex space-x-8 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="flex h-6 w-6 items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={category.icon}
                      />
                    </svg>
                  </div>
                  <div className="text-xs whitespace-nowrap">
                    {category.name}
                  </div>
                  {index === 0 && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-16 bg-white"></div>
                  )}
                </div>
              ))}
              <button className="md:flex hidden h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-md">
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="container hidden mx-auto px-4 py-2 md:flex justify-between items-center">
                <div></div>
                <div className="flex items-center space-x-4">
                  <button className="border border-neutral-800 px-3 py-2 rounded-full bg-transparent text-white hover:bg-neutral-800 flex items-center gap-2">
                    <svg
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                    </svg>
                    Filters
                  </button>

                  <div className="flex items-center space-x-2 border border-neutral-800 px-3 rounded-full hover:bg-neutral-800">
                    <span className="text-sm">Display total before taxes</span>
                    <ToggleLeft className="h-10 w-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
