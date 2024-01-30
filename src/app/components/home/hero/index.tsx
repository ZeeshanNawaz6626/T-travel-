import React from "react";

function Hero() {
  return (

    <div
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
      className="container  bg-black rounded-md pt-40 lg:pl-40 pb-40 pl-3"
    >

      <b><h1 className="text-white   text-align-left text-1xl sm:text-2xl md:text-3xl lg:text-4xl  overflow-hidden whitespace-normal">
        Enjoy a Seamless <br /> AirportExperience
      </h1></b>
      <p className="text-slate-200 text-1xl pt-10">
        Take advantage of our variety of Meet & Great services to make your
        <br />
        airport visit less complicated, faster, and more enjoyabe.
      </p>
    </div>
  );
}

export default Hero;
