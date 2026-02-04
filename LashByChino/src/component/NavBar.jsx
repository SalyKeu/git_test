import { useState } from "react";
import MobileMenu from "./MobileMenu.jsx";
import Footer from "./Footer.jsx";
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-white/40 backdrop-blur-2xl rounded border-black border-2 z-50">
          <div className="flex flex-row justify-start items-center w-full md:px-4 py-2 ">
            <h1 className="font-bold text-2xl font-serif md:ml-6">
              LashByChino
            </h1>
            {/* Hamburger Menu */}
            <div className="relative md:hidden ml-auto mr-6 w-6 h-6">
              {/* Hamburger */}
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className={`absolute inset-0 flex flex-col gap-2 transition-all duration-300 ease-out ${
                  open
                    ? "opacity-0 scale-0 pointer-events-none"
                    : "opacity-100 scale-100"
                }`}
              >
                <span className="w-6 h-0.5 bg-black" />
                <span className="w-6 h-0.5 bg-black" />
                <span className="w-6 h-0.5 bg-black" />
              </button>

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className={`absolute inset-0 flex items-center justify-center text-2xl font-serif font-bold transition-all duration-300 ease-out ${
                  open
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0 pointer-events-none"
                } hover:text-pink-500`}
              >
                ✕
              </button>
            </div>
            {/* Navigation Link */}
            <div className="hidden md:flex md:ml-8 gap-6">
              <ul className="flex gap-6 text-lg">
                <li className="hover:text-pink-500 font-serif hover:cursor-pointer">
                  Home
                </li>
                <li className="hover:text-pink-500 font-serif hover:cursor-pointer">
                  About
                </li>
                <li className="hover:text-pink-500 font-serif hover:cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <button className="font-serif rounded-lg p-4 bg-linear-to-r from-pink-400 to-pink-300 text-black hover:from-pink-500 hover:to-pink-400 transition duration-300 font-bold shadow-md mt-2 hidden md:inline-block md:ml-auto mr-6">
              Book Appointment
            </button>
          </div>
        </nav>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </div>
    </>
  );
}

export default NavBar;
