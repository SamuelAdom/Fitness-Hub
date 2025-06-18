import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex-flex-col">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FITNESS <span className="text-[#C6FF00]">HUB</span>
            </span>
            <p className="text-white text-sm font-mono cursor-pointer">
              SPORTS ARENA
            </p>
          </div>
        </Link>

        {/* Hamburger Button - mobile only */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl text-gray-500 rounded-lg bg-[#C6FF00] dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Offcanvas (mobile) & inline menu (desktop) */}
      <div>
        {/* Overlay menu on small screens */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl text-gray-700 hover:text-[#C6FF00] focus:outline-none"
            >
              &times;
            </button>
          </div>
          {/* Mobile Menu List */}
          <ul className="flex flex-col font-light text-[20px] space-y-4 p-2   ">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 font-extrabold hover:text-[#C6FF00]"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 font-extrabold hover:text-[#C6FF00]"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 font-extrabold hover:text-[#C6FF00]"
              >
                TEAM
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 font-extrabold hover:text-[#C6FF00]"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center">
          <ul className="flex font-light text-[20px] space-x-8 text-white">
            <li>
              <NavLink
                to="/"
                className="hover:text-[#C6FF00]"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-[#C6FF00]"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className="hover:text-[#C6FF00]"
              >
                TEAM
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-[#C6FF00]"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
