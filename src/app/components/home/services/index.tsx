"use client";
import React, { useState } from "react";
import AirlineCard, { AirlineCardType } from "./ui/AirlineCard";
import { airlineNames } from "../../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faClock,
  faChevronDown,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { CiCalendarDate } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import MyDatePicker from "./ui/DatePickerComponent";

function Services() {
  const [time, setTime] = useState("08:15 hours");

  const handelTime = (event) => {
    setTime(event.target.value);
  };
  return (
    <>
      <div className="sm:w-3/4 mx-auto  services bg-white p-7 rounded sm:relative bottom-24 ">
        <h1 className=" text-gray-600">Select Service Type</h1>
        <div className="md:flex">
          <div className="flex">
            <div>
              <button className="text-gray-400 px-3 text-sm border border-solid border-gray-300 p-2 my-3 rounded-full ml-1 focus:text-black focus:border-red-800">
                Luggage Assistance
              </button>
            </div>
            <div>
              <button className="text-gray-400 px-3 text-sm border border-solid border-gray-300 p-2 my-3 rounded-full ml-1 focus:border-red-800 focus:text-black">
                Fast-track Immigration
              </button>
            </div>
          </div>
          <div className="flex">
            <div>
              <button className="text-gray-400 px-3 text-sm border border-solid border-gray-300 p-2 my-3 rounded-full ml-1 focus:border-red-800 focus:text-black ">
                Lounge Access
              </button>
            </div>
            <div>
              <button className="text-gray-400 px-3 text-sm border border-solid border-gray-300 p-2 my-3 rounded-full ml-1 hover:border-red-800 focus:text-black">
                Transfer Services
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-2" />
        <h1 className="my-5 text-gray-600">Input Flight Information</h1>
        <div className="sm:flex sm:ml-0">
          <div>
            <input
              className="mr-2 radio-custom"
              type="radio"
              id="arrival"
              name="gender"
              value="arrival"
            />
            <label htmlFor="arrival" className="text-gray-400">
              Arrival
            </label>
          </div>
          <div className=" sm:ml-10">
            <input
              className="mr-2 radio-custom"
              type="radio"
              id="departure"
              name="gender"
              value="departure"
              defaultChecked={true}
            />
            <label htmlFor="departure" className="text-gray-400">
              Departure
            </label>
          </div>
          <div className=" sm:ml-20">
            <input
              className="mr-2 radio-custom"
              type="radio"
              id="transit"
              name="gender"
              value="transit"
            />
            <label htmlFor="transit" className="text-gray-400">
              Transit
            </label>
          </div>
        </div>
        <div className=" sm:flex border border-solid border-gray-300 rounded-lg overflow-hidden my-5 ">
          {airlineNames.map((item: AirlineCardType, idx: number) => (
            <AirlineCard key={idx} {...item} index={idx}></AirlineCard>
          ))}
        </div>
        <div className="lg:flex  ml:mt-4 sm:mt-4 ml:m-0 space-x-3 ">
          <div className="relative ml-3 lg:ml-0 ">
            <div className="relative max-w-sm  rounded ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <CiCalendarDate className="text-gray-400 size-5" />
              </div>
              <div className="  bg-white border py-4   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pr-9 w-60 lg:w-60   ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <MyDatePicker></MyDatePicker>
              </div>
            </div>
            <label
              htmlFor=" Service Date"
              className="absolute  text-red-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Service Date
            </label>
            <div className="hidden lg:flex  absolute inset-y-0  end-2  items-center ps-3 pointer-events-none text-red-700">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>

          <div className="relative my-5 lg:my-0 ">
            <div className="relative max-w-sm  rounded ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <CiClock2 className="text-gray-400 size-5" />
              </div>

              <input
                value={time}
                onChange={handelTime}
                id=" ServiceDate"
                datepicker-autohide
                type="text"
                className=" bg-white border py-4  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 lg:w-60    ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <label
              htmlFor=" Service Date"
              className="absolute  text-red-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Service Time
            </label>
            <div className="absolute inset-y-0  end-3 hidden lg:flex  items-center ps-3 pointer-events-none text-red-700">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>

          <div className="relative   ">
            <div className="relative max-w-sm   rounded  ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <LuUser2 className="text-gray-400 size-4 " />
              </div>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none "></div>
              <select
                id="ServiceDate"
                className="bg-white py-4  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-60 lg:w-60     p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none"
              >
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 adults, 2 infant
                </option>
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 adults, 4 infant
                </option>
                <option value="">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 adults, 1 infant
                </option>
              </select>
            </div>
            <label
              htmlFor="ServiceDate"
              className="absolute  text-red-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Guest Details
            </label>
            <div className="hidden lg:flex  absolute mt-1 bg-white h-5 w-2  inset-y-3 end-7   items-center ps-3 pointer-events-none text-red-700">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="flex flex-row-reverse mt-5">
          <div>
            <button className="btn-danger text-sm rounded">Book Now</button>
          </div>
          <div>
            <button className="btn-secondry">
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-white text-sm bg-gray-500 rounded-full border border-gray-500 mr-1"
              />
              Add Promo Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
