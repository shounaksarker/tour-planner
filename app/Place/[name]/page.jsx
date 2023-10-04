import { Place } from "@/components/Place/Place";
import React from "react";
import {Saint_martin, Cox_bazar, Bandarban, Sylhet, Rangamati} from "@/components/Utils/DumData"

const page = ({ params }) => {
  return (
    <div>
      {
        params.name === "Saint_martin" ? <Place data={Saint_martin}/> :
        params.name === "Cox_bazar" ? <Place data={Cox_bazar}/> :
        params.name === "Bandarban" ? <Place data={Bandarban}/> :
        params.name === "Sylhet" ? <Place data={Sylhet}/> :
        params.name === "Rangamati" ? <Place data={Rangamati}/> :
        <div className="flex items-center justify-center min-h-[200px]">
          <h1 className="text-4xl font-bold text-red-800">No Data Found......</h1>
        </div>
      }
    </div>
  );
};

export default page;
