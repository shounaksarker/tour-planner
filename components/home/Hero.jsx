import React from "react";

export const Hero = () => {
  return (
    <div className="relative h-[92vh]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569949381669-ecf31ae8e613')" }}></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex justify-center items-center z-10 text-center">
        <p className="text-white text-4xl leading-[50px] font-bold lg:text-5xl">Discover story-worthy travel moments...</p>
      </div>
    </div>
  );
};
