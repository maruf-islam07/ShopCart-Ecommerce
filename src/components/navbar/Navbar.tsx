"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { FaHeart, FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Wrapperr from "../wrapper/Wrapperr";
import { IoMdArrowRoundBack, IoMdHome } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Carter_One } from "next/font/google";
import { IoArrowBackSharp } from "react-icons/io5";

interface NavItem {
  icon: ReactNode; // JSX element-er jonno ReactNode use hoy
  title: string;
  path?: string; //
}

const categories = ["Electronics", "Fashion", "Home Decor", "Gadgets"]

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleActveTav = (tabName: string) => {
    setActiveTab(tabName);
    if (tabName === "Category") {
      setOpenSidebar;
    }
  };

  const Tabs: NavItem[] = [
    {
      title: "Home",
      icon: <IoMdHome className="text-xl " />,
      path: "/",
    },
    {
      title: "Category",
      icon: <BiCategory className="text-xl " />,
    },
    {
      title: "Cart",
      icon: <MdShoppingCart className="text-xl " />,
      path: "/cart",
    },
    {
      title: "Account",
      icon: <VscAccount className="text-xl " />,
      path: "/account",
    },
  ];

  return (
    <header className="bg-gray-800 h-20 flex items-center justify-center lg:block">
      <Wrapperr>
        <nav className="flex items-center justify-between  ">
          {/* logo */}
          <div className="lg:flex items-center hidden ">
            <Image src={logo} width={110} height={0} alt="logo" className=" " />
            <p className="text-2xl font-bold text-white -ms-3">
              Shop<span className="text-orange-600">Craft</span>
            </p>
          </div>

          {/* search  */}
          <div className="flex items-center justify-center border bg-white rounded-xl px-2 w-100 sm:w-140 ">
            <FaSearch className="text-zinc-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-3 py-2 focus:outline-none text-zinc-500 bg-transparent"
            />
            <button className="px-3 py-2 bg-orange-500 rounded-xl text-xs text-zinc-200 hover:bg-orange-600">
              Search
            </button>
          </div>

          {/* nav action */}
          <div className="lg:flex items-center space-x-4 hidden ">
            <FaHeart className="text-xl text-white" />
            <MdShoppingCart className="text-xl text-orange-500 " />
            <button className="px-4 py-2 border border-orange-500 rounded-xl text-xs font-semibold text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-150">
              Login
            </button>
          </div>
        </nav>
      </Wrapperr>

      {/* mobile menu  */}
      <nav className="fixed lg:hidden bottom-0 bg-white px-20 w-full py-5 text-zinc-500 rounded-3xl">
        <ul className="flex items-center justify-between ">
          {Tabs.map((tab, index) => {
            // Check kora hocche ei tab-ta active kina
            const isActive = activeTab === tab.title;
            const content = (
              <div
                className={`flex flex-col items-center gap-1 cursor-pointer 
                  ${isActive ? "text-orange-600" : "text-zinc-500"}`}
              >
                {tab.icon}
                <span className="text-[10px]]">{tab.title}</span>
              </div>
            );

            // Condition: Path thakle Link, na thakle Button
            return tab.path ? (
              <Link
                href={tab.path}
                key={index}
                onClick={() => handleActveTav(tab.title)}
              >
                {content}
              </Link>
            ) : (
              <button
                key={index}
                className="focus:outline-none"
                onClick={() =>{
                  handleActveTav(tab.title)
                  setOpenSidebar(true)
                }
                }
                  
              >
                {content}
              </button>
            );
          })}
        </ul>
      </nav>

      {/* sidebar  */}
      {/* Sidebar Overlay (Kalo jhapsha background) */}
      <div
        className={`fixed lg:hidden inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          openSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenSidebar(false)} // Baire click korle bondho hobe
      />

      {/* Sidebar Content */}
      <aside
        className={`fixed  top-0 left-0 h-full w-full sm:w-150 lg:hidden bg-white z-100 shadow-2xl transform transition-transform duration-300 ease-in-out text-zinc-600 ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center border-b pb-4 space-x-1 " onClick={()=> setOpenSidebar(false)}>
            <IoArrowBackSharp className="text-xl cursor-pointer "/>
            <h2 className="text-xl cursor-pointer">Categories</h2>
            
          </div>

          {/* Category List */}
          <div className="mt-5 space-y-4 overflow-y-auto flex-1 rounded-xl">
            {categories.map((cat) => (
              <div
                key={cat}
                className="py-2 px-4 hover:bg-orange-500  hover:text-white rounded-lg cursor-pointer transition-colors"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
