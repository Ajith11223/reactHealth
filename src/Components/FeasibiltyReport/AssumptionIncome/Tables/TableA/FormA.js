import React, { useState } from "react";

const FormA = ({onSubmit}) => {
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
      <div className="flex justify-center items-center">
        <form
          className="border border-gray-300 p-8 rounded-lg w-80 max-w-screen-lg sm:w-96 mt-5 mb-5"
          onSubmit={handleSubmit}
        >
          <h4 className="text-blue-gray text-center mb-6 text-2xl font-semibold">
            Form A
          </h4>

          <div className="mb-4">
            <div className="space-y-6">
              <div className="flex gap-2">
                <label htmlFor="first" className="w-1/3 mt-2">
                  First
                </label>
                <input
                  type="text"
                  id="first"
                  className="w-2/3 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex gap-2">
                <label htmlFor="second" className="w-1/3 mt-2">
                  Second
                </label>
                <input
                  type="text"
                  id="second"
                  className="w-2/3 p-2 border border-gray-300 rounded-lg"
                />
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
