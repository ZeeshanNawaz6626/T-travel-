import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faPlaneDeparture,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { AirlineCardType } from "../components/home/services/ui/AirlineCard";
import { PiMapPinLine } from "react-icons/pi";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { GoTag } from "react-icons/go";

export const airlineNames: AirlineCardType[] = [
  {
    fontIcon: PiMapPinLine,
    flight: "Airport",
    country: "Dubai",
    airportName: "DXB, Dubai International Airport",
  },
  {
    fontIcon: PiAirplaneTakeoffLight,
    flight: "Airline",
    country: "Fly Emirate",
    airportName: "The Emirate Group",
  },
  {
    fontIcon: GoTag,
    flight: "Flight Number",
    country: "EK-203",
    airportName: "",
  },
];
