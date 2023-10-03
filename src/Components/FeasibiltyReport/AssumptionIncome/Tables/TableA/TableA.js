import React, { useState } from "react";
import "./TableA.css";
import FormA from "./FormA";

const TableA = () => {
  const [data] = useState([
    {
      "Target No. of patients per day per consultant (OPD)": 1,
      "Y-O-Y grwoth in achievement rate": "10%",
      "Achievement %": "50%",
      "Number of Patients per day per consultant (Achivement)": 0,
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
<div className="container p-4 rounded-b-lg bg-gray-50">
      <div
        className={`table-container flex-grow`}
        style={{
          marginTop: "20px",
          marginRight: "50px",
          paddingInline: "40px",
          overflowX: "auto",
        }}
      >        <table
          className="min-w-full divide-y divide-gray-200 "
          id="custom-table"
        >
          <thead>
            <tr>
              {allColumns.map((column, index) => (
                <th
                  key={index}
                  className={`px-6  py-4 text-left ${
                    index === 0 ? "first:rounded-l-lg" : ""
                  } ${
                    index === allColumns.length - 1 ? "last:rounded-r-lg " : ""
                  }`}
                  style={{
                    minWidth: index === 0 ? "300px" : "auto",
                    backgroundColor: "white",
                    whiteSpace: "nowrap", // Ensure text doesn't wrap
                  }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200  border-none">
            {Object.keys(data[0]).map((key) => (
              <tr key={key}>
                <td className="px-6 py-4 text-left rounded-l-lg">
                  <b> {key}</b>
                </td>
                {allColumns.slice(1).map((column, index) => (
                  <td
                    key={index}
                    className={`px-6 py-4 justify-center ${
                      index === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                  >
                    {additionalData[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 <div className="mt-4 text-center">
        <button
          onClick={toggleForm}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Open Form
        </button>
      </div>
      {isFormOpen && (
        <div className="right">
          <FormA onSubmit={hideForm} />
        </div>
      )}
    </div>
      );
};

export default TableA;
