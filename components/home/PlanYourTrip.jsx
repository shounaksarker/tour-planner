"use client"
import React from 'react';
import Image from "next/image";
import saint from "../../Imgs/saint.jpeg";
import cox from '../../Imgs/PlaceImg/cox1.jpg';
import band from '../../Imgs/PlaceImg/band_mountain.jpeg';
import syl from '../../Imgs/PlaceImg/syl_tea.jpeg';
import rang from '../../Imgs/PlaceImg/rangamati8.jpg';
import Link from 'next/link';

export const PlanYourTrip = () => {
  
  const carouselItems = [
    {
      img: saint,
      link:"/Place/Saint_martin",
      title: "Saint Martin"
    },
    {
      img: cox,
      link:"/Place/Cox_bazar",
      title: "Cox's Bazar"
    },
    {
      img: band,
      link:"/Place/Bandarban",
      title: "Bandarban"
    },
    {
      img: syl,
      link:"/Place/Sylhet",
      title: " Sythet"
    },
    {
      img: rang,
      link:"/Place/Rangamati",
      title: "Rangamati"
    },
  ];

  return (
    <div className="container pb-9 overflow-hidden">
      <div className="mb-3">
        <h5 className="text-[#616161] mb-2">Plan your trip</h5>
        <h1 className="font-bold text-3xl lg:text-4xl ">Where to next?</h1>
      </div>
      <div className="carousel rounded-box">
      {carouselItems.map((x, index) => (
        <Link
        href={x.link}
          className={`cursor-pointer mr-2 carousel-item flex-col items-cente `}
          key={index}
        >
          <Image className='rounded-xl w-[250px] md:w-[350px] md:h-[300px] lg:w-[450px] lg:h-[360px]' src={x.img} alt={`img ${index}`} /> 
          <h3 className="font-bold first-letter:uppercase ml-2">{x.title}</h3>
        </Link>
      ))}
    </div>
    </div>
  );
};
