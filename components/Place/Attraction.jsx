/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import saint from "../../Imgs/saint.jpg"

export const Attraction = ({attractionCards}) => {
  return (
    <div className="flex flex-col space-y-6 bg-blue-200/40 px-4 py-8 rounded-xl lg:py-16 lg:px-8">
      <div className="flex flex-col space-y-4">
        <h4 className="bg-gradient-to-r from-[#374559] to-[#e3716c] bg-clip-text text-transparent font-mono tracking-wider text-sm lg:text-base mb-4 uppercase max-w-[180px]">
          01 / Attraction
        </h4>
        <h2 className="text-2xl font-bold md:text-5xl">
          Must-see attractions for your itinerary{" "}
        </h2>
      </div>

      <div className="carousel rounded-box max-w-full">
      {attractionCards?.map((x, index) => (
        <div
          className={`cursor-pointer mr-2 carousel-item flex-col items-cente max-w-[290px] lg:max-w-[500px]`}
          key={index}
        >
          <Image height={330} className='rounded-xl' src={x?.img} alt={`Burger ${index}`} /> 
          <div>
          <h3 className="font-bold first-letter:uppercase ml-2 my-3">{x?.cardTitle}</h3>
          <p className="px-2">{x?.cardText}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
