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

  return (
    <div className="container">
      <div
        className="table-container"
        style={{
          marginTop: "20px",
          marginRight: "50px",
          paddingInline: "40px",
          overflowX: "auto", // Enable horizontal scrolling
        }}
      >
        <table className="min-w-full divide-y divide-gray-200 " id="custom-table">
          <thead>
            <tr className="">
              {allColumns.map((column, index) => (
                <th
                  key={index}
                  className={`px-6  py-4 text-left ${
                    index === 0 ? 'first:rounded-l-lg' : ''} ${
                    index === allColumns.length - 1 ? 'last:rounded-r-lg ' : ''}`}   
                                   style={{
                    minWidth: index === 0 ? "300px" : "auto",
                    backgroundColor :"white",
                  }}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 rounded-lg space-y-4 border-none">
            {Object.keys(data[0]).map((key) => (
              <tr
                key={key}
              >
                <td
                  className="px-6 py-4 text-left rounded-l-lg"
                >
                 <b> {key}</b>
                </td>
                {allColumns.slice(1).map((column, index) => (
                  <td
                    key={index}
                    className={`px-6 py-4 justify-center ${
                      index === allColumns.length - 1 ? 'last:rounded-r-lg ' : ''}`}
                  >
                    {additionalData[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="right">
        <FormA />
      </div>
    </div>
  );
};

export default TableA;
