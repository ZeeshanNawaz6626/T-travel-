import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGlobe,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { PiBellSimple } from "react-icons/pi";
import { GoGlobe } from "react-icons/go";

function Navbar() {
  return (
    <>
      <div className="container mx-auto py-5">
        <nav className="border-gray-200 px-2 ">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <img
              className="w-36 h-18"
              src="images/logo/T-TRAVEL.png"
              alt="ttravel"
            />

            <div className="flex md:order-2">
              <div className=" hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <PiBellSimple className="w-10 h-6 hover:cursor-pointer" />
                <span className="logged-in">●</span>
                {/* <!-- Profile dropdown --> */}
                <div className="relative ml-4 flex-shrink-0">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      ></img>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" md:flex justify-between items-center w-full md:w-auto md:order-1"
              id="mobile-menu-3"
            >
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <div className="dropdown">
                    <button className="dropbtn pr-1">All Services</button>{" "}
                    <FontAwesomeIcon icon={faChevronDown} />
                    <div className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                  >
                    Support<i className="fas fa-arrows-alt-v"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="blue text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                  >
                    <div className=" flex ">
                      <GoGlobe className="text-Gray-light pr-1 size-5" />
                      <p>Language</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
