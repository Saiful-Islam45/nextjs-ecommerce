/* eslint-disable @next/next/no-img-element */
import React from "react";
import Logo from "./Logo";
import CartSVG from "../../shared/CartSVG";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-900">
      <nav
        x-data="{ isOpen: false }"
        className="relative bg-white shadow dark:bg-gray-800"
      >
        <div className="container mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center pt-6">
              <Logo />{" "}
              <span style={{ marginTop: "-50px", marginLeft: "-43px" }}>
                ini E-commerce
              </span>
            </Link>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <a
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Home
              </a>
              <a
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Shop
              </a>
              <a
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Contact
              </a>
              <a
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                About
              </a>
            </div>

            <div className="flex justify-center md:block">
              <Link href={"/cart"}>
                <CartSVG />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
