import React from "react";
import {
  sundarbans,
  srimangal,
  sajekValley,
  rangamati,
  dhaka,
  kuakataBeach,
  ratnodweepIsland,
  bandarban,
  coxsBazarSeaWorld,
  saintMartinsIsland,
} from "@/components/Utils/ArticleData";
import { Card } from "../others/Card";

export const LatestStories = () => {
  return (
    <div className="container">
      <div className="relative">
        <h2 className="bg-gradient-to-r from-[#374559] to-[#e3716c] bg-clip-text text-transparent font-mono tracking-wider text-sm lg:text-base mb-4 xl:max-w-[250px]">
          Travel stories and news
        </h2>
        <h1 className="text-2xl font-bold md:text-5xl mb-4">
          Explore Our Latest Stories
        </h1>
      </div>

      <div className="relative lg:flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:h-full">
        {/* image  */}
        <div className="relative w-full h-[300px] lg:w-[60%] lg:h-[570px] rounded-lg">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1569949381669-ecf31ae8e613')",
            }}
          >
            <div className="absolute top-[150px] fade_btm opacity-60 text-white h-[50%] w-full lg:h-[40%] lg:top-[60%] lg:bottom-0"></div>
            <div className="absolute bottom-[10%] text-white px-2">
              <h3 className="uppercase text-[12px] md:text-base">
                SUSTAINABLE TRAVEL
              </h3>
              <h1 className="text-xl font-bold my-1 md:text-3xl">
                How to get around Dhaka
              </h1>
              <p className="text-[10px] md:text-[14px]">
                Dhaka is the world’s most populous city. Fortunately, its public
                scenario is up to the job.
              </p>
            </div>
          </div>
        </div>
        {/* card  */}
        <div className="w-full lg:w-[35%]">
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item relative w-full flex flex-col"
            >
              <div>
                <Card
                  img={srimangal?.img}
                  title={srimangal?.title}
                  text={srimangal?.desc}
                  link="srimangal"
                />
                <Card
                  img={sundarbans?.img}
                  title={sundarbans?.title}
                  text={sundarbans?.desc}
                  link="sundarbans"
                />
                <Card
                  img={sajekValley?.img}
                  title={sajekValley?.title}
                  text={sajekValley?.desc}
                  link="sajekValley"
                />
              </div>
              <div className="flex justify-between transform mt-2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slide2"
              className="carousel-item relative w-full flex flex-col"
            >
              <div>
                <Card
                  img={rangamati?.img}
                  title={rangamati?.title}
                  text={rangamati?.desc}
                  link="rangamati"
                />
                <Card
                  img={dhaka?.img}
                  title={dhaka?.title}
                  text={dhaka?.desc}
                  link="dhaka"
                />
                <Card
                  img={kuakataBeach?.img}
                  title={kuakataBeach?.title}
                  text={kuakataBeach?.desc}
                  link="kuakataBeach"
                />
              </div>
              <div className="flex justify-between transform mt-2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            <div
              id="slide3"
              className="carousel-item relative w-full flex flex-col"
            >
              <div>
              <Card
                  img={ratnodweepIsland?.img}
                  title={ratnodweepIsland?.title}
                  text={ratnodweepIsland?.desc}
                  link="ratnodweepIsland"
                />
                <Card
                  img={bandarban?.img}
                  title={bandarban?.title}
                  text={bandarban?.desc}
                  link="bandarban"
                />
                <Card
                  img={saintMartinsIsland?.img}
                  title={saintMartinsIsland?.title}
                  text={saintMartinsIsland?.desc}
                  link="saintMartinsIsland"
                />
              </div>
              <div className="flex justify-between transform mt-2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
