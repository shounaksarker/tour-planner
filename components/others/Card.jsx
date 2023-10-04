import React from "react";
import photographer from '../../Imgs/photographer.jpg';
import Image from "next/image";
import Link from "next/link";

export const Card = ({img, title, text, link}) => {
  return (
    <Link href={`/Article/${link}`} className="card card-side shadow-md mb-2 bg-[#F0F7FC] py-2 lg:mb-4">
      <figure className="w-[20%]">
        <div className="relative h-[120px] w-[100px] ml-2">
            <Image
              src={img?img:photographer}
              alt={title}
              fill
              className="rounded-xl"
              />

        </div>

        {/* <div className=" ml-2">
            <Image
              src={img?img:photographer}
              alt={title}
              
              className="rounded-xl"
              />
        </div> */}
      </figure>
      
      <div className="card-body px-2 w-[80%]">
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm sm:text-base text-ellipsis overflow-hidden max-h-7">{text}...</p>
      </div>
    </Link>
  );
};
