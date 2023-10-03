import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createGeneralAssumption, getGeneralAssumption, updateAssumptionData } from "../../../API/ApiRequest";
import './GeneralAssumptions.css'

const GeneralAssumption = () => {
    const user = useSelector((state) => state.counter.user)
    const { fid } = useParams()
    const [assumption, setAssumption] = useState(null)


    // // input states
    const [patientWithInsurance, setPatientWithInsurence] = useState(0)
    const [payByCash, setPayByCash] = useState(0)
    const [taxProfit, setTaxProfit] = useState(0)
    const [oneToFive, setOneToFive] = useState(0)
    const [sixToEight, setSixToEight] = useState(0)
    const [nineToTen, setNineToTen] = useState(0)
    const [yearEleven, setYearEleven] = useState(0)
    const [nonInsuranceBased, setNonInsuranceBased] = useState(0)  ///eq
    const [payCredit, setPayCredit] = useState(0) // eq

    // id for assumption
    const [assumptionId, setAssumptionId] = useState(null)

    // fetch data
    const fetchGeneralAssuption = async () => {
        try {
            const dataObj = {
                "feasibiltyId": fid
            }
            const { data } = await getGeneralAssumption(dataObj)

            if (data) {
                setAssumption(data?.getData)
                setAssumptionId(data?.getData?._id)
                setPatientWithInsurence(data?.getData?.patientsWithInsurance)
                setPayByCash(data?.getData?.patientPayingByCash)
                setTaxProfit(data?.getData?.TaxRateOnTaxableProfit)
                setOneToFive(data?.getData?.ProfitTaxableYearOneToYearFive)
                setSixToEight(data?.getData?.ProfitTaxableYearSixToYearEight)
                setNineToTen(data?.getData?.ProfitTaxableYearNineToYearTen)
                setYearEleven(data?.getData?.ProfitTaxableYearEleven)

            } else {
                setAssumption(null)

            }
        } catch (error) {
            console.log("err assuption general", error)
        }
    }

    useEffect(() => {
        fetchGeneralAssuption()
    }, [fid])

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




    // submit
    const handleSubmit = async () => {
        const data = {
            "patientsWithInsurance": Number(patientWithInsurance),
            "patientPayingByCash": Number(payByCash),
            "TaxRateOnTaxableProfit": Number(taxProfit),
            "ProfitTaxableYearOneToYearFive": Number(oneToFive),
            "ProfitTaxableYearSixToYearEight": Number(sixToEight),
            "ProfitTaxableYearNineToYearTen": Number(nineToTen),
            "ProfitTaxableYearEleven": Number(yearEleven),
            "nonInsuranceBased": 100 - Number(patientWithInsurance),
            "payCredit": 100 - Number(payByCash),
            "feasibiltyId": fid,
            "userId": user.id

        }
        try {

            const create = await createGeneralAssumption(data)
            if (create) {
                fetchGeneralAssuption()
            }
        } catch (error) {
            console.log(error)
        }

    }

    // handleEditSubmit
    const handleEditSubmit = async () => {
        const data = {
            "patientsWithInsurance": Number(patientWithInsurance),
            "patientPayingByCash": Number(payByCash),
            "TaxRateOnTaxableProfit": Number(taxProfit),
            "ProfitTaxableYearOneToYearFive": Number(oneToFive),
            "ProfitTaxableYearSixToYearEight": Number(sixToEight),
            "ProfitTaxableYearNineToYearTen": Number(nineToTen),
            "ProfitTaxableYearEleven": Number(yearEleven),
            "nonInsuranceBased": 100 - Number(patientWithInsurance),
            "payCredit": 100 - Number(payByCash)
        }

        try {
            if (assumptionId != null) {
                const updateData = await updateAssumptionData(data, assumptionId)
                if (updateData) {
                    fetchGeneralAssuption()
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className=" bg-gray-100 w-full flex " style={{justifyContent:"space-between"}}>
            <div >
                <div
                    style={{
                        marginTop: "20px",
                        marginRight: "150px",
                        // paddingInline: "40px",
                        textAlign:"start"
                    }}
                >
                    <h5 className="" style={{ fontFamily: "poppins",fontWeight:"700",fontSize:"24px" }}>General Assumptions</h5>
                    <table className="min-w-full divide-y divide-gray-200 " id="custom-table" style={{minWidth:"800px"}}>
                        <thead className="bg-white ">
                            <tr className="">
                                <th className="px-6 py-3 text-left rounded-l-lg">
                                    <span>Sl no.</span>
                                </th>
                                <th className="px-6 py-3 text-left ">
                                    <span>Assumption description</span>
                                </th>
                                <th className="px-6 py-3 text-left ">
                                    <span>Assumption unit</span>
                                </th>
                                <th className="px-6 py-3 text-left rounded-r-lg">
                                    <span>Assumption value</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200  ">
                            {/* {data?.map((item) => {
                return ( */}
                            <>
                                <tr
                                >
                                    <td className="px-6 py-4 justify-center rounded-l-lg">
                                      1
                                    </td>
                                    <td className="px-6 py-4">{"% of non-insurance based patients in the footfall"}</td>
                                    <td className="px-6 py-4">{"%"}</td>
                                    <td className="px-6 py-4 rounded-r-lg" >{assumption?.nonInsuranceBased} </td>
                                </tr>
                            </>

                            <>
                                <tr
                                >
                                    <td className="px-6 py-4 justify-center rounded-l-lg">
                                      2
                                    </td>
                                    <td className="px-6 py-4">{"% of patients with insurance"}</td>
                                    <td className="px-6 py-4">{"%"}</td>
                                    <td className="px-6 py-4 rounded-r-lg" >{assumption?.patientsWithInsurance} </td>
                                </tr>
                            </>

                            <>
                                <tr
                                >
                                    <td className="px-6 py-4 justify-center rounded-l-lg">
                                       3
                                    </td>
                                    <td className="px-6 py-4">{"% of patients paying by credit card"}</td>
                                    <td className="px-6 py-4">{"%"}</td>
                                    <td className="px-6 py-4 rounded-r-lg" >{assumption?.payCredit} </td>
                                </tr>
                            </>

                            <>
                                <tr
                                >
                                    <td className="px-6 py-4 justify-center rounded-l-lg">
                                      4
                                    </td>
                                    <td className="px-6 py-4">{"% of patients paying by cash"}</td>
                                    <td className="px-6 py-4">{"%"}</td>
                                    <td className="px-6 py-4 rounded-r-lg" >{assumption?.patientPayingByCash} </td>
                                </tr>
                            </>

                            <>
                                <tr
                                >
                                    <td className="px-6 py-4 justify-center rounded-l-lg">
                                     5
                                    </td>
                                    <td className="px-6 py-4">{"Tax Rate on Taxable Profit"}</td>
                                    <td className="px-6 py-4">{"%"}</td>
                                    <td className="px-6 py-4 rounded-r-lg" >{assumption?.TaxRateOnTaxableProfit} </td>
                                </tr>
                            </>

                            <>
                                <tr
                                >
                                    <td className="px-6 py-4 justify-center rounded-l-lg">
                                       6
                                    </td>
                                    <td className="px-6 py-4">{"Profit Taxable in the Year 1 to Year 5"}</td>
                                    <td className="px-6 py-4">{"%"}</td>
                                    <td className="px-6 py-4 rounded-r-lg" >{assumption?.ProfitTaxableYearOneToYearFive} </td>
                                </tr>
                            </>

                            <>
                                <tr
                                >
                                    <td className="px-6 py-4 justify-center rounded-l-lg">
                                       7
                                    </td>
                                    <td className="px-6 py-4">{"Profit Taxable in the Year 6 to Year 8"}</td>
                                    <td className="px-6 py-4">{"%"}</td>
                                    <td className="px-6 py-4 rounded-r-lg" >{assumption?.ProfitTaxableYearSixToYearEight} </td>
                                </tr>
                            </>

                            <>
                                <tr
                                >
                                    <td className="px-6 py-4 justify-center rounded-l-lg">
                                      8
                                    </td>
                                    <td className="px-6 py-4">{"Profit Taxable in the Year 9 to Year 10"}</td>
                                    <td className="px-6 py-4">{"%"}</td>
                                    <td className="px-6 py-4 rounded-r-lg" >{assumption?.ProfitTaxableYearNineToYearTen} </td>
                                </tr>
                            </>

                            <>
                                <tr
                                >
                                    <td className="px-6 py-4 justify-center rounded-l-lg">
                                       9
                                    </td>
                                    <td className="px-6 py-4">{"Profit Taxable in the Year 11 Onwards"}</td>
                                    <td className="px-6 py-4">{"%"}</td>
                                    <td className="px-6 py-4 rounded-r-lg" >{assumption?.ProfitTaxableYearEleven} </td>
                                </tr>
                            </>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="right">Right Content (40%)</div> */}
            <div
                className="modal-container bg-white mx-auto rounded shadow-lg z-50"
                style={{
                    width: "485px",
                    height: "545px",
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
                        <p className="text-2xl font-bold">Add General Assuptions</p>
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
                                % of patients with insurance
                            </label>
                            <input
                                type="text"
                                id="projectName"
                                name="projectName"
                                className="appearance-none border w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Project Name"
                                value={patientWithInsurance}
                                onChange={(ev) => setPatientWithInsurence(ev.target.value)}
                                style={{borderRadius:"13px",height:"45px"}}
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="projectName"
                            >
                                % of patients paying by cash
                            </label>
                            <input
                                type="text"
                                id="projectName"
                                name="projectName"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Project Name"
                                value={payByCash}
                                onChange={(ev) => setPayByCash(ev.target.value)}
                                style={{borderRadius:"13px",height:"45px"}}

                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 bg-white text-sm font-bold mb-2"
                                htmlFor="description"
                            >
                                Tax Rate on Taxable Profit
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description"
                                value={taxProfit}
                                onChange={(ev) => setTaxProfit(ev.target.value)}
                                className="appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                style={{borderRadius:"13px",height:"45px"}}
                            
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="description"
                            >
                                Profit Taxable in the Year 1 to Year 5
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description"
                                value={oneToFive}
                                onChange={(ev) => setOneToFive(ev.target.value)}
                                className="appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                style={{borderRadius:"13px",height:"45px"}}
                            
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="description"
                            >
                                Profit Taxable in the Year 6 to Year 8
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description"
                                value={sixToEight}
                                onChange={(ev) => setSixToEight(ev.target.value)}
                                className="appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                style={{borderRadius:"13px",height:"45px"}}
                            
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="description"
                            >
                                Profit Taxable in the Year 9 to Year 10
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description"
                                value={nineToTen}
                                onChange={(ev) => setNineToTen(ev.target.value)}
                                className="appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                style={{borderRadius:"13px",height:"45px"}}
                           
                           />
                        </div>
                        <div >
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="description"
                            >
                                Profit Taxable in the Year 11 Onwards
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                placeholder="Description"
                                value={yearEleven}
                                onChange={(ev) => setYearEleven(ev.target.value)}
                                className="appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        {
                            assumption !== null ?
                                // <div style={{ textAlign: "end" }}>
                                    <button
                                        className="modal-close w-full rounded-md p-2 text-white bg-green-600 hover:bg-blue-400"

                                        onClick={handleEditSubmit}

                                    >
                                        Save
                                    </button>
                                // </div>
                                :
                                // <div style={{ textAlign: "end" }}>
                                    <button
                                        onClick={handleSubmit}
                                        className="modal-close w-full  rounded-md p-2 text-white bg-green-600 hover:bg-blue-400"

                                    >
                                        Submit
                                    </button>
                                // </div>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default GeneralAssumption;