

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createFeasiblity } from "../../API/ApiRequest";

 const FeasibiltyModal=({ isModalOpen, closeModal, projectId }) =>{

  

  const user = useSelector((state) => state.counter.user)
  const handleClose = () => {
    closeModal();
  };


  // const craete state
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')


  const handleSubmit = async () => {
    const data = {
      "name": name,
      "description": description,
      "userId": user.id,
      "projectId": projectId
    }

    const create = await createFeasiblity(data)
    if (create) {
      closeModal()
      setName('')
      setDescription('')

    }


  }
  return (
    <div className={`fixed inset-0 z-50 ${isModalOpen ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          onClick={handleClose}
        ></div>
        <div
          className="modal-container bg-white mx-auto rounded shadow-lg z-50 overflow-y-auto"
          style={{
            width: "678px",
            height: "268px",
            top: "425px",
            left: "496px",
            borderRadius: "20px",
          }}
        >
          {" "}
          <div className="modal-content py-4 text-left px-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Add Project</p>
              <button
                onClick={handleClose}
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
                  Feasibilty Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Project Name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Discription
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            {/* Modal Footer */}
            <div
              style={{
                width: "633px",
                height: "55px",
                marginTop: "30px"
              }}
            >
              <button
                onClick={handleSubmit}
                className="modal-close rounded-lg text-white hover:bg-blue-400"
                style={{
                  width: "633px",
                  backgroundColor: "#4A4BE4",
                  padding: "17px 224px 17px 224px",
                  borderRadius: "13px",
                }}

              >
                Add New Feasibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeasibiltyModal