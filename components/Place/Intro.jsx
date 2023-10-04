import React from "react";
import { BsCalendarMinus, BsStar } from "react-icons/bs";

export const Intro = ({
  title,
  country,
  desc,
  bestTimeToVisit,
  bestThingsToDo,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="lg:max-w-[43%]">
        <p className="font-bold text-xl md:text-xl">
          <span className="text-3xl md:text-4xl text-blue-700">{title}</span>{" "}
          <span className="underline underline-offset-2 ml-4">{country}</span>
        </p>
        <p className="my-6 md:text-lg text-justify">
          {desc}
        </p>
      </div>

      <div className="flex flex-col justify-around items-center lg:w-[50%]">
        <h3 className="font-semibold underline underline-offset-2 mb-3">
          START PLANNING YOUR TRIP
        </h3>
        <div className="flex justify-between items-start">
          <div className="bg-green-200/50 p-4 flex flex-col justify-between  w-[46%] h-[180px] md:h-[150px] rounded-lg shadow-md lg:min-h-[180px]">
            <BsCalendarMinus className="text-xl lg:text-3xl" />
            <h2 className="font-semibold">Best Time To Visit: {bestTimeToVisit}</h2>
          </div>

          <div className="bg-red-200/50 p-4 flex flex-col justify-between  w-[46%] h-[180px] md:h-[150px] rounded-lg shadow-md lg:min-h-[180px]">
            <BsStar className="text-xl lg:text-3xl" />
            <h2 className="font-semibold">
              Best Things To Do: {bestThingsToDo}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
