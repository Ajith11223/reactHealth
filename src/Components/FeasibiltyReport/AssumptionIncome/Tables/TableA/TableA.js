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
        <table
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
      {/* <div className="right"> */}
        {/* <FormA /> */}
        <div
                className="modal-container bg-white mx-auto rounded shadow-lg z-50"
                style={{
                    width: "485px",
                    height: "345px",
                    top: "425px",
                    left: "496px",
                    borderRadius: "20px",
                    marginTop:"40px"
                }}
            >
                {" "}
                <div className="modal-content py-4 text-left px-6">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold" style={{fontFamily:"poppins"}}>Table A</p>
                        <button
                            // onClick={handleClose}
                            className="modal-close"
                            style={{ fontSize: "20px", width: "20px", height: "20px" }}
                        >
                            &#215;
                        </button>
                    </div>
                    {/* Modal Body */}
                    <div className="py-2 grid grid-cols-2 gap-4" style={{ marginTop: "10px" }} >
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="projectName"
                            >
                                % of patients 
                            </label>
                            <input
                                type="text"
                                id="projectName"
                                name="projectName"
                                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Project Name"
                                // value={patientWithInsurance}
                                // onChange={(ev) => setPatientWithInsurence(ev.target.value)}
                                style={{borderRadius:"13px",height:"45px"}}
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="projectName"
                            >
                                % of patients
                            </label>
                            <input
                                type="text"
                                id="projectName"
                                name="projectName"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Project Name"
                                // value={payByCash}
                                // onChange={(ev) => setPayByCash(ev.target.value)}
                                style={{borderRadius:"13px",height:"45px"}}

                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="description"
                            >
                                Tax Rate on
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description"
                                // value={taxProfit}
                                // onChange={(ev) => setTaxProfit(ev.target.value)}
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                style={{borderRadius:"13px",height:"45px"}}
                            
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="description"
                            >
                                Profit 
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description"
                                // value={oneToFive}
                                // onChange={(ev) => setOneToFive(ev.target.value)}
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                style={{borderRadius:"13px",height:"45px"}}
                            
                            />
                        </div>
                        
                        



                    </div>

                    {/* Modal Footer */}
                    <div
                        style={{
                            textAlign: "end",
                            display: "flex", justifyContent: "end",
                        }}
                        
                    >
                        {/* {
                            assumption !== null ? */}
                                {/* // <div style={{ textAlign: "end" }}>
                                    <button
                                        className="modal-close w-full rounded-md p-2 text-white bg-green-600 hover:bg-blue-400"

                                        onClick={handleEditSubmit}

                                    >
                                        Save
                                    </button>
                                // </div> */}
                                {/* : */}
                                 {/* <div style={{ textAlign: "end" }}> */}
                                    <button
                                        // onClick={handleSubmit}
                                        className="modal-close w-full  rounded-md p-2 text-white bg-green-600 hover:bg-blue-400"

                                    >
                                        Submit
                                    </button>
                                {/* </div> */}
                        {/* } */}

                    </div>
                </div>
            </div>
      </div>

    // </div>
  );
};

export default TableA;
