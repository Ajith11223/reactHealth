import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TbPencilMinus } from "react-icons/tb";
import {
  createGeneralAssumption,
  getGeneralAssumption,
  updateAssumptionData,
} from "../../../API/ApiRequest";
import "./GeneralAssumptions.css";

const GeneralAssumption = () => {
  const user = useSelector((state) => state.counter.user);
  const { fid } = useParams();
  const [assumption, setAssumption] = useState(null);

  // // input states
  const [patientWithInsurance, setPatientWithInsurence] = useState(0);
  const [payByCash, setPayByCash] = useState(0);
  const [taxProfit, setTaxProfit] = useState(0);
  const [oneToFive, setOneToFive] = useState(0);
  const [sixToEight, setSixToEight] = useState(0);
  const [nineToTen, setNineToTen] = useState(0);
  const [yearEleven, setYearEleven] = useState(0);
  const [nonInsuranceBased, setNonInsuranceBased] = useState(0); ///eq
  const [payCredit, setPayCredit] = useState(0); // eq

  // id for assumption
  const [assumptionId, setAssumptionId] = useState(null);

  // fetch data
  const fetchGeneralAssuption = async () => {
    try {
      const dataObj = {
        feasibiltyId: fid,
      };
      const { data } = await getGeneralAssumption(dataObj);

      if (data) {
        setAssumption(data?.getData);
        setAssumptionId(data?.getData?._id);
        setPatientWithInsurence(data?.getData?.patientsWithInsurance);
        setPayByCash(data?.getData?.patientPayingByCash);
        setTaxProfit(data?.getData?.TaxRateOnTaxableProfit);
        setOneToFive(data?.getData?.ProfitTaxableYearOneToYearFive);
        setSixToEight(data?.getData?.ProfitTaxableYearSixToYearEight);
        setNineToTen(data?.getData?.ProfitTaxableYearNineToYearTen);
        setYearEleven(data?.getData?.ProfitTaxableYearEleven);
      } else {
        setAssumption(null);
      }
    } catch (error) {
      console.log("err assuption general", error);
    }
  };

  useEffect(() => {
    fetchGeneralAssuption();
  }, [fid]);

  const [data] = useState([
    {
      id: 1,
      documentName: "Document 1",
      project: "Project A",
      value: "value",
    },
    {
      id: 2,
      documentName: "Document 2",
      project: "Project B",
      value: "value",
    },
    {
      id: 3,
      documentName: "Document 2",
      project: "Project B",
      value: "value",
    },
    {
      id: 4,
      documentName: "Document 2",
      project: "Project B",
      value: "value",
    }, // Add more data as needed
  ]);

  const [isFormOpen, setIsFormOpen] = useState(true);

  // submit
  const handleSubmit = async () => {
    setIsFormOpen(!isFormOpen);
    const data = {
      patientsWithInsurance: Number(patientWithInsurance),
      patientPayingByCash: Number(payByCash),
      TaxRateOnTaxableProfit: Number(taxProfit),
      ProfitTaxableYearOneToYearFive: Number(oneToFive),
      ProfitTaxableYearSixToYearEight: Number(sixToEight),
      ProfitTaxableYearNineToYearTen: Number(nineToTen),
      ProfitTaxableYearEleven: Number(yearEleven),
      nonInsuranceBased: 100 - Number(patientWithInsurance),
      payCredit: 100 - Number(payByCash),
      feasibiltyId: fid,
      userId: user.id,
    };
    try {
      const create = await createGeneralAssumption(data);
      if (create) {
        fetchGeneralAssuption();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handleEditSubmit
  const handleEditSubmit = async () => {
    setIsFormOpen(!isFormOpen);
    const data = {
      patientsWithInsurance: Number(patientWithInsurance),
      patientPayingByCash: Number(payByCash),
      TaxRateOnTaxableProfit: Number(taxProfit),
      ProfitTaxableYearOneToYearFive: Number(oneToFive),
      ProfitTaxableYearSixToYearEight: Number(sixToEight),
      ProfitTaxableYearNineToYearTen: Number(nineToTen),
      ProfitTaxableYearEleven: Number(yearEleven),
      nonInsuranceBased: 100 - Number(patientWithInsurance),
      payCredit: 100 - Number(payByCash),
    };

    try {
      if (assumptionId != null) {
        const updateData = await updateAssumptionData(data, assumptionId);
        if (updateData) {
          fetchGeneralAssuption();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hideForm = () => {
    setIsFormOpen(false);
  };
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
        <div>
        <div
        style={{
          marginTop: "20px",
          marginRight: "150px",
          // paddingInline: "40px",
          textAlign: "start",
        }}
      >
        <h5
          className=""
          style={{
            fontFamily: "poppins",
            fontWeight: "700",
            fontSize: "24px",
          }}
        >
          General Assumptions
        </h5>
          </div>
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
              <table
                className="min-w-full divide-y divide-gray-200 "
                id="custom-table"
                style={{ minWidth: "900px" }}
              >
                <thead className="bg-white ">
                  <tr
                    className=""
                    style={{
                      color: "#90909C",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <th className="px-6 py-3 text-left rounded-l-2xl font-normal">
                      <span>Sl no.</span>
                    </th>
                    <th className="px-6 py-3 text-left font-normal">
                      <span>Assumption description</span>
                    </th>
                    <th className="px-6 py-3 text-left font-normal">
                      <span>Assumption unit</span>
                    </th>
                    <th className="px-6 py-3 text-left rounded-r-2xl font-normal">
                      <span>Assumption value</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-custom-gray">
                  {/* {data?.map((item) => {
                return ( */}
                  <>
                    <tr>
                      <td className="px-6 py-4 justify-center rounded-l-2xl">
                        1
                      </td>
                      <td className="px-6 py-4">
                        {"% of non-insurance based patients in the footfall"}
                      </td>
                      <td className="px-6 py-4">{"%"}</td>
                      <td className="px-6 py-4 rounded-r-2xl">
                        {assumption?.nonInsuranceBased}{" "}
                      </td>
                    </tr>
                  </>

                  <>
                    <tr>
                      <td className="px-6 py-4 justify-center rounded-l-2xl">
                        2
                      </td>
                      <td className="px-6 py-4">
                        {"% of patients with insurance"}
                      </td>
                      <td className="px-6 py-4">{"%"}</td>
                      <td className="px-6 py-4 rounded-r-2xl">
                        {assumption?.patientsWithInsurance}{" "}
                      </td>
                    </tr>
                  </>

                  <>
                    <tr>
                      <td className="px-6 py-4 justify-center rounded-l-2xl">
                        3
                      </td>
                      <td className="px-6 py-4">
                        {"% of patients paying by credit card"}
                      </td>
                      <td className="px-6 py-4">{"%"}</td>
                      <td className="px-6 py-4 rounded-r-2xl">
                        {assumption?.payCredit}{" "}
                      </td>
                    </tr>
                  </>

                  <>
                    <tr>
                      <td className="px-6 py-4 justify-center rounded-l-2xl">
                        4
                      </td>
                      <td className="px-6 py-4">
                        {"% of patients paying by cash"}
                      </td>
                      <td className="px-6 py-4">{"%"}</td>
                      <td className="px-6 py-4 rounded-r-2xl">
                        {assumption?.patientPayingByCash}{" "}
                      </td>
                    </tr>
                  </>

                  <>
                    <tr>
                      <td className="px-6 py-4 justify-center rounded-l-2xl">
                        5
                      </td>
                      <td className="px-6 py-4">
                        {"Tax Rate on Taxable Profit"}
                      </td>
                      <td className="px-6 py-4">{"%"}</td>
                      <td className="px-6 py-4 rounded-r-lg">
                        {assumption?.TaxRateOnTaxableProfit}{" "}
                      </td>
                    </tr>
                  </>

                  <>
                    <tr>
                      <td className="px-6 py-4 justify-center rounded-l-2xl">
                        6
                      </td>
                      <td className="px-6 py-4">
                        {"Profit Taxable in the Year 1 to Year 5"}
                      </td>
                      <td className="px-6 py-4">{"%"}</td>
                      <td className="px-6 py-4 rounded-r-2xl">
                        {assumption?.ProfitTaxableYearOneToYearFive}{" "}
                      </td>
                    </tr>
                  </>

                  <>
                    <tr>
                      <td className="px-6 py-4 justify-center rounded-l-2xl">
                        7
                      </td>
                      <td className="px-6 py-4">
                        {"Profit Taxable in the Year 6 to Year 8"}
                      </td>
                      <td className="px-6 py-4">{"%"}</td>
                      <td className="px-6 py-4 rounded-r-2xl">
                        {assumption?.ProfitTaxableYearSixToYearEight}{" "}
                      </td>
                    </tr>
                  </>

                  <>
                    <tr>
                      <td className="px-6 py-4 justify-center rounded-l-2xl">
                        8
                      </td>
                      <td className="px-6 py-4">
                        {"Profit Taxable in the Year 9 to Year 10"}
                      </td>
                      <td className="px-6 py-4">{"%"}</td>
                      <td className="px-6 py-4 rounded-r-2xl">
                        {assumption?.ProfitTaxableYearNineToYearTen}{" "}
                      </td>
                    </tr>
                  </>

                  <>
                    <tr>
                      <td className="px-6 py-4 justify-center rounded-l-2xl">
                        9
                      </td>
                      <td className="px-6 py-4">
                        {"Profit Taxable in the Year 11 Onwards"}
                      </td>
                      <td className="px-6 py-4">{"%"}</td>
                      <td className="px-6 py-4 rounded-r-2xl">
                        {assumption?.ProfitTaxableYearEleven}{" "}
                      </td>
                    </tr>
                  </>
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
                    className="border-none p-8 w-[80] max-w-screen-lg sm:w-96 mt-5 mb-5 bg-white h-[650px]"
                    //   onSubmit={hideForm}
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
                                % of patients with insurance
                              </label>
                              <input
                                className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                style={{
                                  height: "50px",
                                  borderRadius: "13px",
                                }}
                                type="number"
                                placeholder="Enter value"
                                value={patientWithInsurance}
                                onChange={(ev) =>
                                  setPatientWithInsurence(ev.target.value)
                                }
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
                                % of patients paying by cash
                              </label>
                              <input
                                className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                style={{
                                  height: "50px",
                                  borderRadius: "13px",
                                }}
                                type="number"
                                placeholder="Enter value"
                                value={payByCash}
                                onChange={(ev) => setPayByCash(ev.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-[-20px]">
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
                                Tax Rate on Taxable Profit
                              </label>
                              <input
                                className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                style={{
                                  height: "50px",
                                  borderRadius: "13px",
                                }}
                                type="number"
                                placeholder="Enter value"
                                value={taxProfit}
                                onChange={(ev) => setTaxProfit(ev.target.value)}
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
                                Profit Taxable in the Year 1 to Year 5
                              </label>
                              <input
                                className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                style={{
                                  height: "50px",
                                  borderRadius: "13px",
                                }}
                                type="number"
                                placeholder="Enter value"
                                value={oneToFive}
                                onChange={(ev) => setOneToFive(ev.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-[-20px]">
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
                                Profit Taxable in the Year 6 to Year 8
                              </label>
                              <input
                                className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                style={{
                                  height: "50px",
                                  borderRadius: "13px",
                                }}
                                type="number"
                                placeholder="Enter value"
                                value={sixToEight}
                                onChange={(ev) =>
                                  setSixToEight(ev.target.value)
                                }
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
                                Profit Taxable in the Year 9 to Year 10
                              </label>
                              <input
                                className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                style={{
                                  height: "50px",
                                  borderRadius: "13px",
                                }}
                                type="number"
                                placeholder="Enter value"
                                value={nineToTen}
                                onChange={(ev) => setNineToTen(ev.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-[-20px]">
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
                                Profit Taxable in the Year 11 Onwards
                              </label>
                              <input
                                className="border border-gray-300 mt-[3px] px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                                style={{
                                  height: "50px",
                                  borderRadius: "13px",
                                }}
                                type="number"
                                placeholder="Enter value"
                                value={yearEleven}
                                onChange={(ev) =>
                                  setYearEleven(ev.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {assumption !== null ? (
                      <button
                        onClick={handleEditSubmit}
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
                          Save
                        </span>
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
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
                          Submit
                        </span>
                      </button>
                    )}
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

export default GeneralAssumption;
