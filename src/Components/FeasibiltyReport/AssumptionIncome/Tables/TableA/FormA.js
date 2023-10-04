import axios from "axios";
import React, { useEffect, useState } from "react";

const FormA = ({ onSubmit }) => {

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



  // input state open
  const [open, setOpen] = useState(false)
  const [opd, setOpd] = useState('')
  const [achmnt, setAchmnt] = useState('')

  const fetchdata = async () => {
    const { data } = await axios.get("http://localhost:5000/api/incomeA/666561736962696c74794964")
    console.log(data)
    setData(data?.data)
  }


  const handleCreate = async () => {
    const dataObj = {
      "Achivement": { "year1": Number(achmnt) },
      "TargetNoOfPatientsPerDayPerConsultantOPD": {
        "year1": Number(opd), "year2": Number(opd), "year3": Number(opd),
        "year4": Number(opd), "year5": Number(opd), "year6": Number(opd), "year7": Number(opd), "year8": Number(opd), "year9": Number(opd),
        "year10": Number(opd), "year11": Number(opd), "year12": Number(opd)
      },
      YOYGrowthInAchievementRate: YoYGrowth
    }

    const updateData = await axios.patch(`http://localhost:5000/api/incomeA/650acde9e06fb3c6a89303e1/`, dataObj)
    if (updateData) {
      fetchdata()
      setOpen(false)
    }
  }


  const id = "666561736962696c74794964"
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get("http://localhost:5000/api/incomeA/666561736962696c74794964")
      console.log(data)
      setData(data?.data)
    }

    fetchdata()

  }, [])


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




  useEffect(() => {
    setAchievement({
      year1: data?.Achivement?.year1,
      year2: achievment?.year1 + data?.YOYGrWothInAchievementRate?.year2,
      year3: achievment?.year2 + data?.YOYGrWothInAchievementRate?.year3,
      year4: achievment?.year3 + data?.YOYGrWothInAchievementRate?.year4,
      year5: achievment?.year4 + data?.YOYGrWothInAchievementRate?.year5,
      year6: achievment?.year5 + data?.YOYGrWothInAchievementRate?.year6,
      year7: achievment?.year6 + data?.YOYGrWothInAchievementRate?.year7,
      year8: achievment?.year7 + data?.YOYGrWothInAchievementRate?.year8,
      year9: achievment?.year8 + data?.YOYGrWothInAchievementRate?.year9,
      year10: achievment?.year9 + data?.YOYGrWothInAchievementRate?.year10,
      year11: achievment?.year10 + data?.YOYGrWothInAchievementRate?.year11,
      year12: achievment?.year11 + data?.YOYGrWothInAchievementRate?.year12,
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
      year1: Math.round((data?.YOYGrWothInAchievementRate?.year1 / 100) / (achievment?.year1 / 100)),
      year2: Math.round((data?.YOYGrWothInAchievementRate?.year2 / 100) / (achievment?.year2 / 100)),
      year3: Math.round((data?.YOYGrWothInAchievementRate?.year3 / 100) / (achievment?.year3 / 100)),
      year4: Math.round((data?.YOYGrWothInAchievementRate?.year4 / 100) / (achievment?.year4 / 100)),
      year5: Math.round((data?.YOYGrWothInAchievementRate?.year5 / 100) / (achievment?.year5 / 100)),
      year6: Math.round((data?.YOYGrWothInAchievementRate?.year6 / 100) / (achievment?.year6 / 100)),
      year7: Math.round((data?.YOYGrWothInAchievementRate?.year7 / 100) / (achievment?.year7 / 100)),
      year8: Math.round((data?.YOYGrWothInAchievementRate?.year8 / 100) / (achievment?.year8 / 100)),
      year9: Math.round((data?.YOYGrWothInAchievementRate?.year9 / 100) / (achievment?.year9 / 100)),
      year10: Math.round((data?.YOYGrWothInAchievementRate?.year10 / 100) / (achievment?.year10 / 100)),
      year11: Math.round((data?.YOYGrWothInAchievementRate?.year11 / 100) / (achievment?.year11 / 100)),
      year12: Math.round((data?.YOYGrWothInAchievementRate?.year12 / 100) / (achievment?.year12 / 100))
    })

  }, [data, NumberOfPatientsPerDayPerConsultant.year1, NumberOfPatientsPerDayPerConsultant.year2, NumberOfPatientsPerDayPerConsultant.year3,
    NumberOfPatientsPerDayPerConsultant.year4, NumberOfPatientsPerDayPerConsultant.year5, NumberOfPatientsPerDayPerConsultant.year6,
    NumberOfPatientsPerDayPerConsultant.year7, NumberOfPatientsPerDayPerConsultant.year8, NumberOfPatientsPerDayPerConsultant.year9,
    NumberOfPatientsPerDayPerConsultant.year10, NumberOfPatientsPerDayPerConsultant.year11, NumberOfPatientsPerDayPerConsultant.year12])



  // save
  const handleSave = async (id) => {
    const dataObj = {
      "Achivement": achievment,
      "NumberOfPatientsPerDayPerConsultant": NumberOfPatientsPerDayPerConsultant
    }

    const updateData = await axios.patch(`http://localhost:5000/api/incomeA/${id}/`, dataObj)
    if (updateData) {
      setRendar((pre) => pre + 1)
    }
  }

  // Define a state variable to control the visibility of the div
  const [isDivOpen, setIsDivOpen] = useState(true);

  // Function to handle form submission and close the div
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Your form submission logic goes here

    // Close the div by setting isDivOpen to false
    onSubmit();
  };

  console.log(YoYGrowth)

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
