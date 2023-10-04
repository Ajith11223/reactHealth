import React, { useState } from "react";
import "../TableA/TableA.css";
import { TbPencilMinus } from 'react-icons/tb'

const TableB = () => {
  const [data] = useState([
    {
      "Y-O-Y grwoth in achievement rate (Admission)": "5%",
      "Achivement % (Admissions)": "30%",
      "Y-O-Y grwoth in achievement rate (OT Procedures)": "7%",
      "Achivement % (OT Prodcedures)": "20%",
    },
  ]);


  // states input field
  const [admissionYoYAcmnt, setAdmissionYoYAchmnt] = useState("")
  const [admissionAcmnt, setAdmissionAchmnt] = useState("")
  //ot procudure
  const [opdYoYAcmnt, setOpdYoYAchmnt] = useState("")
  const [opdAcmnt, setOpdAchmnt] = useState("")
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


  // create functionality
  const handleCreateB = async () => {
    alert("jj")
    const data = {
      "YOYGrowthInAchievementRateAdmission": {
        "year1": admissionYoYAcmnt, "year2": admissionYoYAcmnt, "year3": admissionYoYAcmnt, "year4": admissionYoYAcmnt, "year5": admissionYoYAcmnt,
        "year6": admissionYoYAcmnt, "year7": admissionYoYAcmnt, "year8": admissionYoYAcmnt, "year9": admissionYoYAcmnt, "year10": admissionYoYAcmnt,
        "year11": admissionYoYAcmnt, "year12": admissionYoYAcmnt,
      },
      "AchievementAdmissions": {
        "year1": admissionAcmnt, "year2": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 1, "year3": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 2,
        "year4": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 3, "year5": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 4,
        "year6": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 5, "year7": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 6,
        "year8": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 7, "year9": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 8,
        "year10": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 9, "year11": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 10,
        "year12": Number(admissionAcmnt) + Number(admissionYoYAcmnt) * 11,
      }
    }

    console.log(data)
  }

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
                    className={`px-6 py-4 text-left ${index === 0 ? "rounded-l-2xl" : ""
                      } ${index === allColumns.length - 1
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
                      className={`px-6 py-4 justify-center ${index === allColumns.length - 2 ? "rounded-r-2xl" : ""
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
              <div
                className="border-none p-5 w-80 max-w-screen-lg sm:w-96 mt-5 mb-5 bg-white h-min-40"
                onSubmit={hideForm}
                style={{
                  borderRadius: "20px",
                }}
              >

                <div style={{ textAlign: "start" }}>
                  <span style={{ fontWeight: "bold" }}>Admission</span>
                </div>


                <div className="">
                  <div className="flex gap-4">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pr-4">
                        <div className="">
                          <label
                            className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                            style={{
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "19.09px",
                            }}
                          >
                            YoY Achievement
                          </label>
                          <input
                            className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            style={{
                              height: "50px",
                              borderRadius: "13px",
                            }}
                            type="number"
                            id="first"
                            placeholder="Y-O-Y grwoth in achievement rate (Admission)"
                            value={admissionYoYAcmnt}
                            onChange={(ev) => setAdmissionYoYAchmnt(ev.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pl-4">
                        <div className="">
                          <label
                            className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                            style={{
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "19.09px",
                            }}
                          >
                            Achivement %
                          </label>
                          <input
                            className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            style={{
                              height: "50px",
                              borderRadius: "13px",
                            }}
                            type="number"
                            id="second"
                            placeholder="Achivement % (Admissions)"
                            value={admissionAcmnt}
                            onChange={(ev) => setAdmissionAchmnt(ev.target.value)}
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="mt-4" style={{ textAlign: "start" }}>
                    <span style={{ fontWeight: "bold" }}>OT Procedures</span>
                  </div>
                  <div className="mt-3">
                    <div className="flex gap-4">
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pr-4">
                          <div className="">
                            <label
                              className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                              style={{
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "19.09px",
                              }}
                            >
                              YoY Achievement
                            </label>
                            <input
                              className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              style={{
                                height: "50px",
                                borderRadius: "13px",
                              }}
                              type="number"
                              id="first"
                              placeholder="Y-O-Y grwoth in achievement rate (Admission)"
                              value={opdYoYAcmnt}
                              onChange={(ev) => setOpdYoYAchmnt(ev.target.value)}
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pl-4">
                          <div className="">
                            <label
                              className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                              style={{
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "19.09px",
                              }}
                            >
                              Achivement %
                            </label>
                            <input
                              className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              style={{
                                height: "50px",
                                borderRadius: "13px",
                              }}
                              type="number"
                              id="second"
                              placeholder="Achivement % (Admissions)"
                              value={opdAcmnt}
                              onChange={(ev) => setOpdAchmnt(ev.target.value)}
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-green-500 text-white mt-5  hover:bg-gray-100 hover:text-green-500 text-lg"
                  style={{
                    borderRadius: "13px",
                    gap: "6px",
                  }}
                  onClick={handleCreateB}
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
              </div>
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

export default TableB;
