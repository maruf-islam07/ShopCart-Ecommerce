"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { FaHeart, FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Wrapperr from "../wrapper/Wrapperr";
import { IoMdHome } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface NavItem {
  icon: ReactNode; // JSX element-er jonno ReactNode use hoy
  title: string;
  path? : string; //
}

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(false);

  const Tabs: NavItem[] = [
    {
      title: "Home",
      icon: <IoMdHome className="text-xl " />,
      path : "/"
    },
    {
      title: "Category",
      icon: <BiCategory className="text-xl " />,
      
    },
    {
      title: "Cart",
      icon: <MdShoppingCart className="text-xl " />,
      path: "/cart"
      
    },
    {
      title: "Account",
      icon: <VscAccount className="text-xl " />,
      path: "/account"
    },
  ];

  return (
    <header className="bg-white h-16 flex items-center lg:block">
      <Wrapperr>
        <nav className="flex items-center justify-between  ">
          {/* logo */}
          <div className="lg:flex items-center hidden ">
            <Image src={logo} width={60} height={40} alt="logo" className=" " />
            <p className="text-2xl font-bold text-zink-200 -ms-3">
              Shop<span className="text-orange-600">Craft</span>
            </p>
          </div>

          {/* search  */}
          <div className="flex items-center justify-center border border-gray-400 rounded-xl px-2 w-100 sm:w-140 ">
            <FaSearch className="text-zinc-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-3 py-2 focus:outline-none text-zinc-500"
            />
            <button className="px-3 py-2 bg-orange-500 rounded-xl text-xs text-white hover:bg-orange-600">
              Search
            </button>
          </div>

          {/* nav action */}
          <div className="lg:flex items-center space-x-4 hidden ">
            <FaHeart className="text-xl " />
            <MdShoppingCart className="text-xl " />
            <button className="px-4 py-2 border border-orange-500 rounded-xl text-xs font-semibold text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-150">
              Login
            </button>
          </div>
        </nav>

        {/* mobile menu  */}
      </Wrapperr>

      <nav className="fixed bottom-0 bg-white px-14 w-full py-5 text-zinc-500 ">
        <ul className="flex items-center justify-between ">
          {Tabs.map((tab, index)=>{
             const content = (
              <div className="flex flex-col items-center gap-1 cursor-pointer">
                {tab.icon}
                <span className="text-[10px]]">{tab.title}</span>
              </div>
             );

             // Condition: Path thakle Link, na thakle Button
             return tab.path ? (
              <Link href={tab.path} key={index}>
                {content}
              </Link>
             ) :(
              <button
                key={index}
               
                className="focus:outline-none"
              >
                {content}
              </button>
             )

})}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
