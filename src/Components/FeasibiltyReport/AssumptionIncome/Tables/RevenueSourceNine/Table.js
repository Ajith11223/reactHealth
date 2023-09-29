import React, { useState } from "react";
import "../TableA/TableA.css";
import Form from "./Form";

const RevenueSourceNine = () => {
  const [data] = useState([
    {
      "Number of Labor Delivery Rooms (LDR)":2,
      "Max. Deliveries per LDR per Day": 4,
      "Max. Deliveries Per Annum in the hospital": 2496,
      "% Achivement":"50%",
      "Average number of Deliveries per annum in the hospital": 1248,
      "Average revenue per Delivery": 350,
      "Income from Source No. 9":436800,

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
        <table className="min-w-full divide-y divide-gray-200 rounded-lg">
          <thead>
            <tr>
              {allColumns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left"
                  style={{
                    border: "10px solid rgb(243 244 246)",
                    borderRadius: "10px",
                    minWidth: index === 0 ? "300px" : "auto",
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
                style={{
                  border: "10px solid rgb(243 244 246)",
                  borderRadius: "10px",
                }}
                className="border-gray-500"
              >
                <td
                  className="px-6 py-4 text-left"
                  style={{
                    border: "10px solid rgb(243 244 246)",
                    borderRadius: "10px",
                  }}
                >
                 <b> {key}</b>
                </td>
                {allColumns.slice(1).map((column, index) => (
                  <td
                    key={index}
                    className="px-6 py-4 justify-center"
                    style={{
                      border: "10px solid rgb(243 244 246)",
                      borderRadius: "10px",
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
      <div className="right">
        <Form />
      </div>
    </div>
  );
};

export default RevenueSourceNine;
