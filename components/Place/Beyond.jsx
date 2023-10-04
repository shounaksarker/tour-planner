import Image from "next/image";
import React from "react";
import saint from "../../Imgs/saint.jpeg";

export const Beyond = ({ beyondImg, city }) => {
  return (
    <div className="flex flex-col space-y-6 bg-blue-200/40 px-4 py-8 rounded-xl lg:py-16 lg:px-8">
      <div className="flex flex-col space-y-4">
        <h4 className="bg-gradient-to-r from-[#374559] to-[#e3716c] bg-clip-text text-transparent font-mono tracking-wider text-sm lg:text-base mb-4 uppercase max-w-[200px]">
          03 / GO BEYOND
        </h4>
        <h2 className="text-2xl font-bold md:text-5xl">{city} and beyond</h2>
      </div>

      <div className="flex flex-col space-y-4 items-center md:flex-row md:flex-wrap md:justify-between lg:flex-nowrap lg:space-y-0 lg:space-x-4">
        {beyondImg.map((item, index) => {
          return (
            <div key={index} className="w-full md:w-[47%] lg:w-[23%]">
              <div className="relative w-full h-[250px] md:w-full md:h-[300px] ">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="rounded-md"
                  fill
                />
              </div>
              <h3 className="text-lg font-semibold md:text-2xl mt-1">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
