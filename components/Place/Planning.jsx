
import { BsBook, BsFillBuildingsFill } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";

export const Planning = ({thingsToKnow,bestNeighborhoods, dayTrip, moneyAndCosts}) => {
  return (
    <div className="flex flex-col space-y-6 px-4 rounded-xl lg:px-8 lg:space-y-16">
      <div className="flex flex-col space-y-4">
        <h4 className="bg-gradient-to-r from-[#374559] to-[#e3716c] bg-clip-text text-transparent font-mono tracking-wider text-sm lg:text-base mb-4 uppercase max-w-[200px]">
          02 / PLANNING TOOLS
        </h4>
        <h2 className="text-2xl font-bold md:text-5xl">
        Expert guidance to help you plan your trip
        </h2>
      </div>

      <div className="flex flex-col space-y-4 justify-center md:flex-row md:flex-wrap md:justify-between lg:flex-nowrap lg:space-y-0 lg:space-x-4">
          <div className="p-3 shadow-lg rounded-lg border border-zinc-500 flex flex-col justify-between min-h-[200px] md:w-[45%] lg:min-h-[180px] lg:min-w-[23%]">
            <BsBook className="text-xl"/>
            <div>
              <h2 className="text-xl font-semibold mb-3">Things to Know</h2>
              <p className="lg:text-sm">{thingsToKnow}</p>
            </div>
          </div>

          <div className="p-3 shadow-lg rounded-lg border border-zinc-500 flex flex-col justify-between min-h-[200px] md:w-[45%] lg:min-h-[180px] lg:min-w-[23%]">
            <BsFillBuildingsFill className="text-xl"/>
            <div>
              <h2 className="text-xl font-semibold mb-3">Best Neighborhoods</h2>
              <p className="lg:text-sm">{bestNeighborhoods}</p>
            </div>
          </div>

          <div className="p-3 shadow-lg rounded-lg border border-zinc-500 flex flex-col justify-between min-h-[200px] md:w-[45%] lg:min-h-[180px] lg:min-w-[23%]">
            <Ri24HoursFill className="text-xl"/>
            <div>
              <h2 className="text-xl font-semibold mb-3">Day Trips</h2>
              <p className="lg:text-sm">{dayTrip}</p>
            </div>
          </div>

          <div className="p-3 shadow-lg rounded-lg border border-zinc-500 flex flex-col justify-between min-h-[200px] md:w-[45%] lg:min-h-[180px] lg:min-w-[23%]">
            <FaWallet className="text-xl"/>
            <div>
              <h2 className="text-xl font-semibold mb-3">Money and Costs</h2>
              <p className="lg:text-sm">{moneyAndCosts}</p>
            </div>
          </div>
      </div>
    </div>
  );
};
