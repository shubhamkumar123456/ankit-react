
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight"
        >
          <span className="text-blue-600">Shop</span>
          <span className="text-gray-900">Kart</span>
        </Link>

        {/* ================= DESKTOP SEARCH ================= */}
        <div className="hidden w-[40%] md:block">

          <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">

            <span className="mr-2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm text-gray-700 outline-none"
            />

          </div>

        </div>

        {/* ================= NAV LINKS ================= */}
        <div className="hidden items-center gap-2 md:flex">

          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/xyz"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            About
          </Link>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-2">

          {/* Login */}
          <button className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 sm:block">
            Login
          </button>

          {/* Cart */}
          <button className="relative flex h-10 w-10 items-center justify-center rounded-lg text-xl transition hover:bg-gray-100">
            🛒

            {/* Cart Badge */}
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
              0
            </span>
          </button>

          {/* Mobile Menu */}
          <button className="flex h-10 w-10 items-center justify-center rounded-lg text-xl hover:bg-gray-100 md:hidden">
            ☰
          </button>

        </div>

      </div>

      {/* ================= MOBILE SEARCH ================= */}
      <div className="px-4 pb-3 md:hidden">

        <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5">

          <span className="mr-2 text-gray-400">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent text-sm outline-none"
          />

        </div>

      </div>

    </nav>
  );
};

export default Navbar;

