import React, { useState } from "react";

function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
  });

  const { type } = formData;

  function handleChange() {}

  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div>
          <button
            type="button"
            id="type"
            value="sale"
            onClick={handleChange}
            className={`px-7 py-3 text-sm font-medium shadow-md uppercase rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              type === "rent"
            }`}
          >
            Sell
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateListing;
