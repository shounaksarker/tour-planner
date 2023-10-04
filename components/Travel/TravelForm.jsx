'use client'
import React from 'react';

const TravelForm = ({formData, setFormData, handleSubmit}) => {
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-8 w-[300px] md:w-[400px] mx-auto bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Tour Planner</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
            Where do you want to go?
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
            placeholder='Eg: Saint Martin, Bangladesh'
          />
        </div>
        <div className="mb-4">
          <label htmlFor="numPeople" className="block text-sm font-medium text-gray-700">
            Number people?
          </label>
          <select
            id="numPeople"
            name="numPeople"
            value={formData.numPeople}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="1">Single</option>
            <option value="2">Double</option>
            <option value='4'>3-4 Person</option>
            <option value="5">More than 5 Person</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="numDays" className="block text-sm font-medium text-gray-700">
            How many days?
          </label>
          <input
            type="number"
            id="numDays"
            name="numDays"
            min="1"
            value={formData.numDays}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
            Your budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="average">Mid Range</option>
            <option value="high">High</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TravelForm;