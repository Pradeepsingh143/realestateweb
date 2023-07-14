"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header>
      <div className="container flex items-center py-6">
        <div className="logo grow text-xl text-white">logo</div>
        <nav className="list-none gap-14 hidden sm:flex items-center font-medium tracking-wide text-white z-10">
          <Link href={"#about"}>
            <li>About Us</li>
          </Link>
          <Link href={"#services"}>
            <li>Our Services</li>
          </Link>
          <div className="button">
            <Link href={"#contact"}>
              <button className="text-white font-semibold tracking-wide bg-primary capitalize py-2 px-6 hover:brightness-75 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </nav>
        <div className="hamburger block sm:hidden z-10">
          {toggleMenu ? (
            <GiHamburgerMenu
              onClick={() => setToggleMenu(false)}
              color="white"
              fontSize="28px"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setToggleMenu(true)}
              color="white"
              fontSize="28px"
            />
          )}
        </div>
        <div className="mobileMenu sm:hidden">
            {!toggleMenu && 
             <nav className="absolute container top-16 py-10 left-0 w-full list-none flex flex-col gap-5 font-medium tracking-wide text-white z-10 bg-primary">
             <Link href={"#about"}>
               <li>About Us</li>
             </Link>
             <Link href={"#services"}>
               <li>Our Services</li>
             </Link>
               <Link href={"#contact"}>
               <li>Contact Us</li>
               </Link>
           </nav>
            }
        </div>
      </div>
    </header>
  );
}
