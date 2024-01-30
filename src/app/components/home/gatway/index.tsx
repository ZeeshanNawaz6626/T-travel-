import React from "react";

function Gateway() {
  const data = [
    {
      heading: "4K+",
      subheading: "Daily active users",
    },
    {
      heading: "200+",
      subheading: "Airports",
    },
    {
      heading: "3000+",
      subheading: "Service Providers",
    },
  ];
  const images = [
    {
      backgroundImage: "url('images/host1.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      height: "115px",
      width: "33%",
    },
    {
      backgroundImage: "url('images/host2.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      height: "115px",
      width: "33%",
    },
    {
      backgroundImage: "url('images/host2.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      height: "115px",
      width: "33%",
    },
  ];
  return (
    <div className="w-3/4 mx-auto my-10 lg:flex">
      <div className="flex ">
        <div>
          <div>
            <h1 className="text-3xl  sm:font-semibold	 sm:text-5xl">
              Your Gateway <br />
              to Effortless <br />
              Journeys!
            </h1>

            <p className="pt-5 sm:pr-5 text-gray-400">
              TTravel offers premier meet and greet services, turning your
              airport journey into a stress-free and VIP affair. Let our
              professional taem and seamlessly guid you through Immigration,
              baggage claim, and custom.ensuring a hasle-free travel experience.
              Embrace travel luxury with TTravel, where every detail is expertly
              handled, making your arrival or departure truly memorable.
            </p>
          </div>
          <div className=" mb-10 my-12 pt-3 sm:mt-0">
            <div className="flex   justify-between sm:pr-10 pt-5">
              {data.map((item, id) => (
                <div className="mx-1 w-1/3" key={id}>
                  <b>
                    <h1 className="text-red-700 text-3xl ">{item.heading}</h1>
                  </b>
                  <h1 className=" text-gray-400">{item.subheading}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img
            className=" rounded-md gatwayimg 	"
            src="images/imagemain.jpg"
            alt="image"
          />
        </div>
        <div className="flex">
          {images.map((item, id) => (
            <div key={id} className=" rounded-2xl mx-1 " style={item}>
              {" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gateway;
