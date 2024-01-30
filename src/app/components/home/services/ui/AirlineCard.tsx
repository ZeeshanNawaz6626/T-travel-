import React from "react";
import { IconType } from "react-icons";
const AirlineCard = ({
  fontIcon,
  flight,
  country,
  airportName,
  index
}: AirlineCardType) => {
  const Icon = fontIcon;
  return (
    <div className={`grow  md:w-32 ${index <= 1 && "sm:border-r border-b "} sm:border-b-0 border-solid border-gray-300 py-7 pl-10 overflow-auto"`}>
      <div className="flex">
        <p className="text-gray-400 inline-block ">
          <Icon className="inline-block pr-2 w-7 h-7" />
          {flight}
        </p>
      </div>
      <b> <h1 className="text-2xl sm:text-3xl py-2 ">{country}</h1></b>
      <h2 className="text-gray-400">{airportName}</h2>
    </div>
  );
};

export default AirlineCard;

export type AirlineCardType = {
  fontIcon: IconType;
  flight: string;
  country: string;
  airportName: string;
  index?: number
};
