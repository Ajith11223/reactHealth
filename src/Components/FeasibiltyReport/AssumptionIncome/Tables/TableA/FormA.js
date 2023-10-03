import React, { useState } from "react";

const FormA = ({ onSubmit }) => {
  // Define a state variable to control the visibility of the div
  const [isDivOpen, setIsDivOpen] = useState(true);

  // Function to handle form submission and close the div
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Your form submission logic goes here

    // Close the div by setting isDivOpen to false
    onSubmit();
  };

  return (
    // Conditionally render the div based on the value of isDivOpen
    isDivOpen && (
      <div className="flex justify-center items-center ">
        <form
          className="border border-gray-300 p-8 rounded-lg w-80 max-w-screen-lg sm:w-96 mt-5 mb-5 bg-white"
          onSubmit={handleSubmit}
        >
          <h4 className="text-blue-gray text-start text-2xl font-semibold">
            Form A
          </h4>

          <div className="mb-4">
            <div className="flex gap-4">
            <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pr-4">
                    <div className="mt-10">
                      <label
                        className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                        htmlFor="email"
                      >
                        First
                      </label>
                      <input
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                        type="number"
                        id="first"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pl-4">
                    <div className="mt-10">
                      <label
                        className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                      >
                        Second
                      </label>
                      <input
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                        type="number"
                        id="second"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    )
  );
};

export default FormA;
