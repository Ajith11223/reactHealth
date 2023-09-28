import React, { useState } from "react";
import { AiOutlineEllipsis } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const FeasibilityTable = ({ feasibilityData }) => {
    const navigate = useNavigate();

    const handleClick = (feasibilityId) => {
        // Navigate to the "/financialdocuments" route
        navigate(`/feasibilitydocuments/${feasibilityId}`);
    };

    return (
        <div
            style={{ marginTop: "20px", marginRight: "50px", paddingInline: "40px",overflow:"scroll" }}
        >
            
            <table className="min-w-full divide-y divide-gray-200 rounded-lg" >
                <thead className="bg-white ">
                    <tr className="">
                        <th className="px-6 py-3 text-left rounded-l-lg">
                            <span>#</span>
                        </th>
                        <th className="px-6 py-3 text-left ">
                            <span>Document Name</span>
                        </th>
                        <th className="px-6 py-3 text-left ">
                            <span>Project Name</span>
                        </th>
                        <th className="px-6 py-3 text-left ">
                            <span>Status</span>
                        </th>
                        <th className="px-6 py-3 text-left rounded-r-lg ">
                            <span>Edit</span>
                        </th>
                    </tr>
                </thead>
                <br />
                <tbody className="bg-white divide-y divide-gray-200 space-y-4 rounded-lg border-none ">
                    {feasibilityData?.map((item) => {
                        return (
                            <>

                                <tr
                                    key={item?.id}
                                    style={{
                                        border: "10px solid rgb(243 244 246)",
                                        borderRadius: "10px",
                                    }}

                                    className="border-gray-500"
                                    onClick={() => handleClick(item._id)}
                                >
                                    <td className="px-6 py-4 justify-center">
                                        <div
                                            style={{
                                                width: "80px",
                                                height: "70px",
                                                borderRadius: "8px",
                                                border: "10px solid #E4E5FF",
                                            }}
                                        >
                                            <img src={item?.image} alt="" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{item?.name}</td>
                                    <td className="px-6 py-4">{item?.description}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            // onClick={() => toggleStatus(item.id)}
                                            className={`${item?.status === "Doc Prepared"
                                                    ? "bg-green-500 hover:bg-green-600"
                                                    : item?.status === "Doc Prepared"
                                                        ? "bg-yellow-500 hover:bg-yellow-600"
                                                        : "bg-red-500 hover:bg-red-600"
                                                } text-white font-bold py-2 px-4 rounded`}
                                        >
                                            {item?.status}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 rounded-r-lg">
                                        <button className="">
                                            {/* Add your edit icon here */}
                                            <span role="img" aria-label="Edit"><strong>
                                                <AiOutlineEllipsis /></strong>
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};


export default FeasibilityTable;