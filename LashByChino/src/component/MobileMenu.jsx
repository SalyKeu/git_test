import { Link } from "react-router-dom";

function MobileMenu({ onClose }) {
  return (
    <div
      className="md:hidden fixed top-16 left-0 right-0 w-full bg-white/98 backdrop-blur-xl shadow-2xl z-40 border-b-2 border-pink-200"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex flex-col gap-4 p-8">
        <ul className="flex flex-col gap-0">
          <Link
            to="/"
            onClick={onClose}
            className="px-4 py-4 hover:bg-pink-50 font-serif hover:cursor-pointer transition duration-200 border-b border-gray-100 last:border-b-0"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={onClose}
            className="px-4 py-4 hover:bg-pink-50 font-serif hover:cursor-pointer transition duration-200 border-b border-gray-100 last:border-b-0"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="px-4 py-4 hover:bg-pink-50 font-serif hover:cursor-pointer transition duration-200 border-b border-gray-100 last:border-b-0"
          >
            Contact
          </Link>
        </ul>
        <button className="font-serif rounded-lg p-4 bg-linear-to-r from-pink-400 to-pink-300 text-black hover:from-pink-500 hover:to-pink-400 transition duration-300 w-full font-bold shadow-md mt-2">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
