"use client";
import { Nav } from "@/components/nav_footer/Nav";
import { Home } from "@/components/home/Main";
import { Footer } from "@/components/nav_footer/Footer";
import { useState } from "react";

export default function Page() {
  const [calories, setCalories] = useState();
  const [carbohydrates, setCarbohydrates] = useState();
  const [fats, setFats] = useState();
  const [res, setRes] = useState();
  const [info, setInfo] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    excercise: "",
    place: "",
    targetWeight: "",
    targetMonth: "",
  });
  console.log(info);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/ss", {
      method: "POST",
      body: JSON.stringify({
        prompt: `I'm a ${info.gender}, ${info.age} years old, I weigh today ${info.weight} kg and I am ${info.height}m long. I train ${info.excercise} times a week in the gym. My goal is to hit ${info.targetWeight}kg in next ${info.targetMonth} months. now Give me only answer, the Calories, Carbohydrates and the fats for me in an array as if i can use them for my reactJS components. your reply should be just an array like [calories, carbohydrates, fats]. no further text.`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setRes(JSON.parse(data.data)));
  };

  return (
    <div className="p-8">
      {/* <form method="post" className="max-w-[800px] flex flex-col space-y-6">
        <div className="flex w-full justify-between">
          <div>
            <label>Gender: </label>
            <br />
            <div className="flex space-x-4">
              <div className="flex items-star space-x-4">
                <label className="">Male</label>
                <input
                  type="radio"
                  name="gender"
                  className="radio radio-error"
                  value="male"
                  checked={info.gender === "male"}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-star space-x-4">
                <label>Female</label>
                <input
                  type="radio"
                  name="gender"
                  className="radio radio-error"
                  value="female"
                  checked={info.gender === "female"}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div>
            <label>Age:</label>
            <input
              name="age"
              type="number"
              placeholder="Age"
              className=" input input-bordered input-primary w-full max-w-xs"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div>
            <label>Weight (in kg):</label>
            <input
              name="weight"
              type="number"
              placeholder="Weight"
              className=" input input-bordered input-primary w-full max-w-xs"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Height (in meter):</label>
            <input
              name="height"
              type="number"
              placeholder="Height (in meter)"
              className=" input input-bordered input-primary w-full max-w-xs"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div>
            <label>How many times do you excercise in a week:</label>
            <input
              name="excercise"
              type="number"
              placeholder="Excercise per week"
              className=" input input-bordered input-primary w-full max-w-xs"
              onChange={handleInputChange}
            />
          </div>

          <label>Where so you excercise:</label>
          <br />
          <div className="flex">
            <label>Home</label>
            <input
              type="radio"
              name="place"
              className="radio radio-error"
              value="home"
              checked={info.place === "home"}
              onChange={handleInputChange}
            />
            <label>gym</label>
            <input
              type="radio"
              name="place"
              className="radio radio-error"
              value="gym"
              checked={info.place === "gym"}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div>
            <label>Your Targeted Weight:</label>
            <input
              name="targetWeight"
              type="number"
              placeholder="Targeted weight"
              className=" input input-bordered input-primary w-full max-w-xs"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Your Targeted Month:</label>
            <input
              name="targetMonth"
              type="number"
              placeholder="Targeted Month"
              className=" input input-bordered input-primary w-full max-w-xs"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          submit
        </button>
      </form> */}

      <form method="post">
        <div className="flex justify-between flex-wrap">
          {/* left  */}
          <div className="flex flex-col space-y-5 w-[46%]">
            <div className="flex space-x-6">
              <label>Gender: </label>

              <div className="flex space-x-4 ">
                <div className="flex items-star space-x-4">
                  <label className="">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    className="radio radio-error"
                    value="male"
                    checked={info.gender === "male"}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-star space-x-4">
                  <label>Female</label>
                  <input
                    type="radio"
                    name="gender"
                    className="radio radio-error"
                    value="female"
                    checked={info.gender === "female"}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <label>Age:</label>
              <input
                name="age"
                type="number"
                placeholder="Age"
                className=" input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-between">
              <label>Weight (in kg):</label>
              <input
                name="weight"
                type="number"
                placeholder="Weight"
                className=" input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-between">
              <label>Height (in meter):</label>
              <input
                name="height"
                type="number"
                placeholder="Height (in meter)"
                className=" input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col space-y-5 w-[46%]">
            <div className="flex space-x-6">
              <label>Where do you excercise:</label>
              <br />
              <div className="flex space-x-6">
                <label>Home</label>
                <input
                  type="radio"
                  name="place"
                  className="radio radio-error"
                  value="home"
                  checked={info.place === "home"}
                  onChange={handleInputChange}
                />
                <label>gym</label>
                <input
                  type="radio"
                  name="place"
                  className="radio radio-error"
                  value="gym"
                  checked={info.place === "gym"}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <label>How many times do you excercise in a week:</label>
              <input
                name="excercise"
                type="number"
                placeholder="Excercise per week"
                className=" input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-between">
              <label>Your Targeted Weight:</label>
              <input
                name="targetWeight"
                type="number"
                placeholder="Targeted weight"
                className=" input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-between">
              <label>Your Targeted Month:</label>
              <input
                name="targetMonth"
                type="number"
                placeholder="Targeted Month"
                className=" input input-bordered input-primary w-full max-w-xs"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        {/* submit btn  */}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>

      {res && (
        <div className="mt-8">
          <p className="my-2">Calories : {res[0]}</p>
          <p className="my-2">Carbohydrates : {res[1]}</p>
          <p className="my-2">Fats : {res[2]}</p>
        </div>
      )}
    </div>
  );
}
