import React, { useState } from "react";
import "../../TableA/TableA.css";

const IncomeFromSourceNo6 = () => {
  const [data] = useState([
    {
      "Income from Source No.6":1429585,
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
      </div>
    </div>
  );
};

export default IncomeFromSourceNo6;
