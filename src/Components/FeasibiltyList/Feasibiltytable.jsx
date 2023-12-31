import React, { useState } from "react";
import { AiOutlineEllipsis } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import feaseicon from '../../Images/feaseicon.png' //
import Group from '../../Images/Group.png' //

const FeasibilityTable = ({ feasibilityData,projectId }) => {
    const navigate = useNavigate();

    const handleClick = (feasibilityId) => {
        // Navigate to the "/financialdocuments" route
        navigate(`/user/project/${projectId}/${feasibilityId}`);
    };

    return (
        <div
            style={{ marginTop: "20px", marginRight: "50px", paddingInline: "40px",minHeight:"85vh",overflowX:"scroll" }}
        >
            
            <table className="min-w-full divide-y divide-gray-200 " id="custom-table" >
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
                {/* <br /> */}
                <tbody className="bg-white divide-y divide-gray-200 space-y-4   ">
                    {feasibilityData?.map((item) => {
                        return (
                            <>

                                <tr
                                    key={item?.id}
                                    onClick={() => handleClick(item._id)}
                                >
                                    <td className="px-6 py-4 justify-center rounded-l-lg">
                                        {/* <div
                                            style={{
                                                width: "80px",
                                                height: "70px",
                                                borderRadius: "8px",
                                                border: "10px solid #E4E5FF",
                                            }}
                                        >
                                        </div> */}
                                            <img style={{width:"86px",height:"70px"}} src={feaseicon} alt="" />
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
                                                        : "bg-white-500 hover:bg-white-600 text-black"
                                                } text-red-700   py-0 px-3 rounded`}
                                                style={{border:"1px solid red",borderRadius:"10px"}}
                                        >
                                            {"Pending"}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 rounded-r-lg">
                                        <button className="">
                                            {/* Add your edit icon here */}
                                            <span role="img" aria-label="Edit">
                                                <img style={{fontSize:"47px",fontWeight:"900"}} src={Group} alt="" />
                                                {/* <strong> */}
                                                {/* <AiOutlineEllipsis  /></strong> */}
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