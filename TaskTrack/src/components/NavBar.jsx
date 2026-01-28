import React from "react";
import { Link } from "react-router-dom";
export default function NavBar({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-white-900 bg-white overflow-hidden mt-4">
      <nav className="grid grid-cols-3 items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-black justify-start font-sarif ml-4">
          FitTrack
        </h1>
        <div className="flex justify-center gap-6">
          <Link to="/Homepage" className="button-primary button-primary:active">
            Homepage
          </Link>
          <Link to="/Task" className="button-primary button-primary:active">
            Task
          </Link>
        </div>
        <div className="flex justify-end">
          <button className="button-primary button-primary:active mr-6">
            Login
          </button>
        </div>
      </nav>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-700 text-center p-4 text-white-900">
        &copy; 2024 FitTrack. All rights reserved.
      </footer>
    </div>
  );
}
