"use client"
import { Attraction } from "@/components/Place/Attraction";
import { Beyond } from "@/components/Place/Beyond";
import { Intro } from "@/components/Place/Intro";
import { Planning } from "@/components/Place/Planning";
import Image from "next/image";
import React from "react";

export const Place = ({ data }) => {
  return (
    <div className="p-4 flex flex-col space-y-24 lg:px-8 lg:space-y-36">
      <div className="relative w-full min-h-[300px] rounded-md lg:min-h-[500px]">
        <Image src={data.image} alt="" fill className="rounded-lg"/>
      </div>
      <Intro
        title={data.title}
        country={data.country}
        desc={data.desc}
        bestTimeToVisit={data.bestTimeToVisit}
        bestThingsToDo={data.bestThingsToDo}
      />
      <Attraction attractionCards={data.attractionCards}/>
      <Planning thingsToKnow={data.thingsToKnow} bestNeighborhoods={data.bestNeighborhoods} dayTrip={data.dayTrip} moneyAndCosts={data.moneyAndCosts}/>
      <Beyond beyondImg={data.beyondImg} city={data.title}/>
    </div>
  );
};
