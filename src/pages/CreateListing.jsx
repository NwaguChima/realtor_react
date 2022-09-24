import React, { useState } from "react";

function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
  });

  const { type, name, bedrooms, bathrooms } = formData;

  function handleChange() {}

  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={handleChange}
            className={`mr-3 px-7 py-3 text-sm font-medium shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            Sell
          </button>

          <button
            type="button"
            id="type"
            value="sale"
            onClick={handleChange}
            className={`ml-3 px-7 py-3 text-sm font-medium shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
          >
            rent
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6 focus:text-gray-700 focus:bg-white focus:border-slate-600"
        />
        <div className="">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={handleChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-300 bg-white border border-gray-700 rounded transition ease-in-out mb-6 focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div>
        </div>
      </form>
    </main>
  );
}

export default CreateListing;
