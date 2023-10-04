import React, { useState } from "react";
import "../../TableA/TableA.css";
import {TbPencilMinus} from 'react-icons/tb'


const VIPInpatientBeds = () => {
  const [data] = useState([
    {
      "a)VIP Inpatient Beds":35,
      "No. of Patients per day": 937,
      "Fees per bed per day": 300,
      "Consultation charge per day per patient - for the attending doctor & caring nurse":35,
      "Revenue from 5(a): VIP Inpatients":1098633,
    },
  ]);
  const additionalData = {
    "Year 1": 10000,
    "Year 2": 20000,
    "Year 3": 30000,
    "Year 4": 40000,
    "Year 5": 50000,
    "Year 6": 60000,
    "Year 7": 70000,
    "Year 8": 80000,
    "Year 9": 90000,
    "Year 10": 100000,
    "Year 11": 110000,
    "Year 12": 120000,
  };

  // Create an array of all column names (including the initial two)
  const allColumns = ["", ...Object.keys(additionalData)];

  const [isFormOpen, setIsFormOpen] = useState(true);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const hideForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <div className="container p-2">
        <div
          className={`table-container flex-grow`}
          style={{
            marginTop: "20px",
            marginRight: "20px",
            paddingInline: "20px",
            overflowX: "auto",
          }}
        >
          {" "}
          <table
            className="min-w-full divide-y divide-gray-200"
            id="custom-table"
          >
            <thead>
              <tr>
                {allColumns.map((column, index) => (
                  <th
                    key={index}
                    className={`px-6 py-4 text-left ${
                      index === 0 ? "rounded-l-2xl" : ""
                    } ${
                      index === allColumns.length - 1
                        ? "last:rounded-r-2xl"
                        : ""
                    }`}
                    style={{
                      color: "#90909C",
                      fontWeight: 400,
                      minWidth: index === 0 ? "300px" : "auto",
                      backgroundColor: "white",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 border-none">
              {Object.keys(data[0]).map((key) => (
                <tr key={key} className="overflow-x-auto">
                  <td
                    className="px-6 py-4 text-left rounded-l-2xl"
                    style={{
                      color: "#584949",
                      fontWeight: 500,
                    }}
                  >
                    {key}
                  </td>
                  {allColumns.slice(1).map((column, index) => (
                    <td
                      key={index}
                      className={`px-6 py-4 justify-center ${
                        index === allColumns.length - 2 ? "rounded-r-2xl" : ""
                      }`}
                      style={{
                        color: "#584949",
                        fontWeight: 400,
                      }}
                    >
                      {additionalData[column]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isFormOpen && (
          <div
            className="mt-2 right"
            style={{ display: isFormOpen ? "block" : "none" }}
          >
            <div className="flex justify-center items-center">
              <form
                className="border-none p-8 w-80 max-w-screen-lg sm:w-96 mt-5 mb-5 bg-white h-[370px]"
                onSubmit={hideForm}
                style={{
                  borderRadius: "20px",
                }}
              >
                <p
                  className="text-blue-gray text-start text-2xl font-semibold"
                  style={{
                    fontWeight: 700,
                    fontSize: "18px",
                  }}
                >
                  Year 1
                </p>

                <div className="mb-4">
                  <div className="flex gap-4">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pr-4">
                        <div className="mt-10">
                          <label
                            className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                            style={{
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "19.09px",
                            }}
                          >
                            First
                          </label>
                          <input
                            className="border border-gray-300 mt-[3px]  px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            style={{
                              height: "50px",
                              borderRadius: "13px",
                            }}
                            type="number"
                            id="first"
                            placeholder="Enter value"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pl-4">
                        <div className="mt-10">
                          <label
                            className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                            style={{
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "19.09px",
                            }}
                          >
                            Second
                          </label>
                          <input
                            className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            style={{
                              height: "50px",
                              borderRadius: "13px",
                            }}
                            type="number"
                            id="second"
                            placeholder="Enter value"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-green-500 text-white  hover:bg-gray-100 hover:text-green-500 text-lg"
                  style={{
                    borderRadius: "13px",
                    gap: "6px",
                  }}
                >
                  <span
                    className=""
                    style={{
                      lineHeight: "21.47px",
                      fontWeight: 400,
                    }}
                  >
                    {" "}
                    Save{" "}
                  </span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div
        className=" mt-4 p-2 text-end"
        style={{ display: isFormOpen ? "none" : "block" }}
      >
        <button
          onClick={toggleForm}
          className="flex items-center ml-auto px-4 py-2 bg-green-500 text-white hover:bg-white hover:text-green-500"
          style={{
            marginRight: "20px",
            paddingInline: "20px",
            borderRadius: "13px",
          }}
        >
          <TbPencilMinus className="mr-2" /> Edit Table
        </button>
      </div>
    </div>
  );
};

export default VIPInpatientBeds;
