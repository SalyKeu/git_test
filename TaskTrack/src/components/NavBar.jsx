import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function NavBar({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, signOut, user } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen text-white-900 bg-white overflow-hidden mt-4">
      <nav className="grid grid-cols-3 items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-black justify-start font-sarif ml-4">
          TaskTrack
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
          {!isAuthenticated && (
            <button
              className="button-primary button-primary:active mr-6"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
          {isAuthenticated && (
            <div className="flex items-center gap-4 mr-6">
              <span className="text-black text-sm">{user?.email}</span>
              <button
                className="button-primary button-primary:active"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-700 text-center p-4 text-white-900">
        &copy; 2024 TaskTrack. All rights reserved.
      </footer>
    </div>
  );
}
