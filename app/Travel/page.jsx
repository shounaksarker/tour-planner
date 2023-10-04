"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import TravelForm from "@/components/Travel/TravelForm";
import { Auth } from "@/components/others/Auth";
import { Loader } from "@/components/others/Loader";
import { toast } from "react-toastify";

const page = () => {
  const [formData, setFormData] = useState({
    destination: "",
    numPeople: "",
    numDays: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();
  const URL = "http://127.0.0.1:8000/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.info("Plan is preparing..!!.");
    // Handle signup logic here using formData
    const res = await fetch(`${URL}/plan/`, {
      method: "POST",
      body: JSON.stringify({
        destination: formData.destination,
        total_people: formData.numPeople,
        days: formData.numDays,
        budget: formData.budget,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        toast.info("🤩 Plan is ready!!");
        setLoading(false);
        setResponse(res.response);
      })
      .catch((error) => console.error("err", error));
  };
  return (
    <Auth>
      <div className="container min-h-[85vh]">
        <Loader loaderClass={loading ? "block" : "hidden"} />
        {!response && (
          <div className="flex flex-col space-y-6">
            <h1 className="text-2xl md:text-5xl font-semibold">
              Let's Make Your Tour Plan..!!
            </h1>
            <p className="text-lg">
              Are you ready to embark on your next adventure? Our Travel Planner
              is here to make your journey planning a breeze. In just a few
              simple steps, you can tell us where you want to go, how many
              people will be joining you, the duration of your trip, and your
              budget preferences. Let us help you create the perfect itinerary
              tailored to your desires. Get started below and let the adventure
              begin!
            </p>
            <TravelForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
          </div>
        )}
        {/* result  */}
        {response && (
          <div>
            <h1 className="text-2xl text-center font-semibold underline underline-offset-2 mb-4">
              Your Tour Plan is Ready..!!
            </h1>
            <div className="text-justify whitespace-pre-line px-2">
              {response}
            </div>
            <p className="p-4 bg-blue-200 text-sm font-medium italic mt-4 rounded-lg text-center block">
              Hope For Your Best Tour.
            </p>{" "}
          </div>
        )}
      </div>
    </Auth>
  );
};

export default page;
