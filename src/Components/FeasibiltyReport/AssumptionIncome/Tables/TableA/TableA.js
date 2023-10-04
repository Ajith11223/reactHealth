import React, { useEffect, useState } from "react";
import "./TableA.css";
import { TbPencilMinus } from "react-icons/tb";
import axios from "axios";
import { useParams } from "react-router-dom";

const TableA = () => {

  // Create an array of all column names (including the initial two)
  const { fid } = useParams()

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const hideForm = () => {
    setIsFormOpen(false);
  };


  const [data, setData] = useState({})
  const [count, setCount] = useState(1)
  const [render, setRendar] = useState(1)

  const [YoYGrowth, setYoYGrowth] = useState({
    "year1": "",
    "year2": "",
    "year3": "",
    "year4": "",
    "year5": "",
    "year6": "",
    "year7": "",
    "year8": "",
    "year9": "",
    "year10": "",
    "year11": "",
    "year12": ""
  })

  const [achievment, setAchievement] = useState({
    "year1": 0,
    "year2": 0,
    "year3": 0,
    "year4": 0,
    "year5": 0,
    "year6": 0,
    "year7": 0,
    "year8": 0,
    "year9": 0,
    "year10": 0,
    "year11": 0,
    "year12": 0
  })




  // input state open
  const [open, setOpen] = useState(false)
  const [opd, setOpd] = useState('')
  const [achmnt, setAchmnt] = useState('')

  const fetchdata = async () => {
    const { data } = await axios.get(`http://localhost:5000/api/incomeA/${fid}`)
    console.log(data)
    setData(data?.data)
  }


  const handleCreate = async () => {
    const dataObj = {
      "Achievement": { "year1": Number(achmnt) },
      "TargetNoOfPatientsPerDayPerConsultantOPD": {
        "year1": Number(opd), "year2": Number(opd), "year3": Number(opd),
        "year4": Number(opd), "year5": Number(opd), "year6": Number(opd), "year7": Number(opd), "year8": Number(opd), "year9": Number(opd),
        "year10": Number(opd), "year11": Number(opd), "year12": Number(opd)
      },
      YOYGrowthInAchievementRate: YoYGrowth,
      feasibilityId: fid
    }
    const updateData = await axios.post(`http://localhost:5000/api/incomeA`, dataObj)
    if (updateData) {
      fetchdata()
      hideForm()
    }
  }


  // const id = "666561736962696c74794964"
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/incomeA/${fid}`)
      setData(data?.data)
      console.log(data.data)
      setAchmnt(data?.data?.Achievement?.year1)
      setYoYGrowth(data?.data?.YOYGrowthInAchievementRate)
      setOpd(data?.data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year1)
      //setYoYGrowth   setAchievement
    }

    fetchdata()

  }, [fid])






  useEffect(() => {
    setAchievement({
      year1: data?.Achievement?.year1,
      year2: achievment?.year1 + data?.YOYGrowthInAchievementRate?.year2,
      year3: achievment?.year2 + data?.YOYGrowthInAchievementRate?.year3,
      year4: achievment?.year3 + data?.YOYGrowthInAchievementRate?.year4,
      year5: achievment?.year4 + data?.YOYGrowthInAchievementRate?.year5,
      year6: achievment?.year5 + data?.YOYGrowthInAchievementRate?.year6,
      year7: achievment?.year6 + data?.YOYGrowthInAchievementRate?.year7,
      year8: achievment?.year7 + data?.YOYGrowthInAchievementRate?.year8,
      year9: achievment?.year8 + data?.YOYGrowthInAchievementRate?.year9,
      year10: achievment?.year9 + data?.YOYGrowthInAchievementRate?.year10,
      year11: achievment?.year10 + data?.YOYGrowthInAchievementRate?.year11,
      year12: achievment?.year11 + data?.YOYGrowthInAchievementRate?.year12,
    })
  }, [data, achievment.year1, achievment.year2, achievment.year3, achievment.year4, achievment.year5, achievment.year6, achievment.year7, achievment.year8, achievment.year9, achievment.year10, achievment.year11, achievment.year12])


  const [NumberOfPatientsPerDayPerConsultant, setNumberOfPatientsPerDayPerConsultant] = useState({
    "year1": 1,
    "year2": 0,
    "year3": 0,
    "year4": 0,
    "year5": 0,
    "year6": 0,
    "year7": 0,
    "year8": 0,
    "year9": 0,
    "year10": 0,
    "year11": 0,
    "year12": 0
  })


  useEffect(() => {
    setNumberOfPatientsPerDayPerConsultant({
      year1: Math.round((data?.YOYGrowthInAchievementRate?.year1 / 100) / (achievment?.year1 / 100)),
      year2: Math.round((data?.YOYGrowthInAchievementRate?.year2 / 100) / (achievment?.year2 / 100)),
      year3: Math.round((data?.YOYGrowthInAchievementRate?.year3 / 100) / (achievment?.year3 / 100)),
      year4: Math.round((data?.YOYGrowthInAchievementRate?.year4 / 100) / (achievment?.year4 / 100)),
      year5: Math.round((data?.YOYGrowthInAchievementRate?.year5 / 100) / (achievment?.year5 / 100)),
      year6: Math.round((data?.YOYGrowthInAchievementRate?.year6 / 100) / (achievment?.year6 / 100)),
      year7: Math.round((data?.YOYGrowthInAchievementRate?.year7 / 100) / (achievment?.year7 / 100)),
      year8: Math.round((data?.YOYGrowthInAchievementRate?.year8 / 100) / (achievment?.year8 / 100)),
      year9: Math.round((data?.YOYGrowthInAchievementRate?.year9 / 100) / (achievment?.year9 / 100)),
      year10: Math.round((data?.YOYGrowthInAchievementRate?.year10 / 100) / (achievment?.year10 / 100)),
      year11: Math.round((data?.YOYGrowthInAchievementRate?.year11 / 100) / (achievment?.year11 / 100)),
      year12: Math.round((data?.YOYGrowthInAchievementRate?.year12 / 100) / (achievment?.year12 / 100))
    })

  }, [data, NumberOfPatientsPerDayPerConsultant.year1, NumberOfPatientsPerDayPerConsultant.year2, NumberOfPatientsPerDayPerConsultant.year3,
    NumberOfPatientsPerDayPerConsultant.year4, NumberOfPatientsPerDayPerConsultant.year5, NumberOfPatientsPerDayPerConsultant.year6,
    NumberOfPatientsPerDayPerConsultant.year7, NumberOfPatientsPerDayPerConsultant.year8, NumberOfPatientsPerDayPerConsultant.year9,
    NumberOfPatientsPerDayPerConsultant.year10, NumberOfPatientsPerDayPerConsultant.year11, NumberOfPatientsPerDayPerConsultant.year12])



  // save 
  const handleSave = async (id) => {
    const dataObj = {
      "Achievement": { "year1": Number(achmnt) },
      "TargetNoOfPatientsPerDayPerConsultantOPD": {
        "year1": Number(opd), "year2": Number(opd), "year3": Number(opd),
        "year4": Number(opd), "year5": Number(opd), "year6": Number(opd), "year7": Number(opd), "year8": Number(opd), "year9": Number(opd),
        "year10": Number(opd), "year11": Number(opd), "year12": Number(opd)
      },
      YOYGrowthInAchievementRate: YoYGrowth,
    }
    try {
      const updateData = await axios.patch(`http://localhost:5000/api/incomeA/${data?._id}`, dataObj)
      console.log(updateData)
      if (updateData) {
        fetchdata()
        hideForm()
      }
    } catch (error) {
      console.log(error)
    }
  }


  const [data1] = useState([
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
            <tbody className="bg-white divide-y divide-gray-200  border-none">
              <tr >
                <td className="px-6 py-4 text-left rounded-l-lg"
                  style={{
                    color: "#584949",
                    fontWeight: 500,
                  }}>
                  <b> Target No. of patients per day per consultant (OPD)</b>
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year1}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year2}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year3}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year4}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year5}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year6}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year7}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year8}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year9}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year10}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year11}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.TargetNoOfPatientsPerDayPerConsultantOPD?.year12}
                </td>
              </tr>

              <tr >
                <td className="px-6 py-4 text-left rounded-l-lg"
                  style={{
                    color: "#584949",
                    fontWeight: 500,
                  }}>
                  <b> Y-O-Y grwoth in achievement rate</b>
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year1} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year2} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year3} %
                </td>

                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year4} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year5} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year6} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year7} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year8} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year9} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year10} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year11} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {data?.YOYGrowthInAchievementRate?.year12} %
                </td>
              </tr>

              {/* 333333333333333 */}
              <tr >
                <td className="px-6 py-4 text-left rounded-l-lg"
                  style={{
                    color: "#584949",
                    fontWeight: 500,
                  }}>
                  <b> Achivement %</b>
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year1 >= 95 ? 95 : achievment?.year1} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year2 >= 95 ? 95 : achievment?.year2} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year3 >= 95 ? 95 : achievment?.year3} %
                </td>

                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year4 >= 95 ? 95 : achievment?.year4} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year5 >= 95 ? 95 : achievment?.year5} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year6 >= 95 ? 95 : achievment?.year6} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year7 >= 95 ? 95 : achievment?.year7} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year8 >= 95 ? 95 : achievment?.year8} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year9 >= 95 ? 95 : achievment?.year9} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year10 >= 95 ? 95 : achievment?.year10} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year11 >= 95 ? 95 : achievment?.year11} %
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {achievment?.year12 >= 95 ? 95 : achievment?.year12} %
                </td>
              </tr>

              {/* 4444 */}

              <tr >
                <td className="px-6 py-4 text-left rounded-l-lg"
                  style={{
                    color: "#584949",
                    fontWeight: 500,
                  }}>
                  <b> Number of Patients per day per consultant (Achivement)</b>
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year1}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year2}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year3}
                </td>

                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year4}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year5}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year6}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year7}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year8}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year9}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year10}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year11}
                </td>
                <td
                  className={`px-6 py-4 justify-center ${1 === allColumns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                >
                  {NumberOfPatientsPerDayPerConsultant?.year2}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {isFormOpen && (
          <div className="mt-2 right"
            style={{ display: isFormOpen ? "block" : "none" }}>
            {/* <FormA onSubmit={hideForm} /> */}


            <div className="flex justify-center items-center ">
              <div
                className="border border-gray-300 p-8 rounded-lg w-80 max-w-screen-lg sm:w-96 mt-5 mb-5 bg-white"
              // onSubmit={handleSubmit}
              >
                <h4 className="text-blue-gray text-start text-2xl font-semibold">
                  Form A
                </h4>

                <div className="mb-4">
                  <div className="flex gap-4">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pr-4">
                        <div className="mt-4">
                          <label
                            className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                            htmlFor="email"
                          >
                            No. of patients
                          </label>
                          <input
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            type="number"
                            id="first"
                            placeholder="Target No. of patients (OPD)"
                            onChange={(ev) => setOpd(ev.target.value)}
                            value={opd}
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ">
                        <div className="mt-4">
                          <label
                            className="text-[18px] font-helvetica-neue text-black-body text-left !important"
                          >
                            Achivement %
                          </label>
                          <input
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            type="number"
                            id="second"
                            placeholder="Achivement %"
                            value={achmnt}
                            onChange={(ev) => setAchmnt(ev.target.value)}
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-full pl-4">
                        <div className="mt-4">
                          <label
                            className="text-[16px] font-helvetica-neue text-black-body text-left !important"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Y-O-Y grwoth in achievement rate(Year)
                          </label>
                          <div style={{ display: "flex", gap: "3px" }} className="w-full">
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="1"
                              value={YoYGrowth?.year1}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year1"]: value,
                                }));
                              }}
                            />
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="2"
                              value={YoYGrowth?.year2}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year2"]: value,
                                }));
                              }}
                            />
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="3"
                              value={YoYGrowth?.year3}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year3"]: value,
                                }));
                              }}
                            />
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="4"
                              value={YoYGrowth?.year4}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year4"]: value,
                                }));
                              }}
                            />
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="5"
                              value={YoYGrowth?.year5}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year5"]: value,
                                }));
                              }}
                            />
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="6"
                              value={YoYGrowth?.year6}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year6"]: value,
                                }));
                              }}
                            />
                          </div>

                          <div style={{ display: "flex", gap: "3px" }} className="w-full mt-1">
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="7"
                              value={YoYGrowth?.year7}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year7"]: value,
                                }));
                              }}
                            />
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="8"
                              value={YoYGrowth?.year8}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year8"]: value,
                                }));
                              }}
                            />
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="9"
                              value={YoYGrowth?.year9}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year9"]: value,
                                }));
                              }}
                            />
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="10"
                              value={YoYGrowth?.year10}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year10"]: value,
                                }));
                              }}
                            />
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="11"
                              value={YoYGrowth?.year11}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year11"]: value,
                                }));
                              }}
                            />
                            <input
                              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                              type="text"
                              id="second"
                              placeholder="12"
                              value={YoYGrowth?.year12}
                              onChange={(e) => {
                                const { value } = e.target;
                                setYoYGrowth((prevYoYGrowth) => ({
                                  ...prevYoYGrowth,
                                  ["year12"]: value,
                                }));
                              }}
                            />
                          </div>

                        </div>

                      </div>


                    </div>
                  </div>
                </div>

                {
                  !data ?
                    <>
                      <button
                        type="submit"
                        className="w-full py-2 bg-black text-white rounded-lg hover:bg-blue-600"
                        onClick={handleCreate}
                      >
                        Submit
                      </button>
                    </> :
                    <button
                      type="submit"
                      className="w-full py-2 bg-black text-white rounded-lg hover:bg-blue-600"
                      onClick={handleSave}
                    >
                      Edit
                    </button>
                }

              </div>
            </div>

            {/*  */}

          </div>
        )}
      </div>
      <div className=" mt-4 p-2 text-end"
        style={{ display: isFormOpen ? "none" : "block" }}>
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

export default TableA;
