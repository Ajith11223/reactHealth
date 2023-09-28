import React, { useState } from "react";
import { testApi } from "../../API/API";

function ProjectModal({ openModal, closeModal }) {


  // input states
  const [projectName, setProjectName] = useState('')
  const [location, setLocation] = useState('')
  // validation state
  const [valid, setValid] = useState(false)

  // form submit 
  const handleSubmit = async () => {
    setValid(true)
    const userId = "650be7cb7f219f8d321d527d"
    const data = {
      "name": projectName,
      "location": location,
      "userId": userId
    }

    try {
      if (projectName?.length != 0 && location?.length != 0) {
        const createProject = await testApi.post('/project/createPrj', data)
        setValid(false)
        setProjectName("")
        setLocation('')
        closeModal();
      }
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className={`fixed inset-0 z-50 ${openModal ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          onClick={closeModal}
        ></div>
        <div
          className="modal-container bg-white mx-auto rounded shadow-lg z-50 overflow-y-auto"
          style={{
            width: "678px",
            height: "668px",
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
                onClick={closeModal}
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
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={projectName}
                  onChange={(ev) => setProjectName(ev.target.value)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Project Name"
                />
              </div>
              {
                valid && projectName?.length == 0 ? <span style={{ color: "red" }}>Please Enter Location</span> : ""
              }
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Location"
                  value={location}
                  onChange={(ev) => setLocation(ev.target.value)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {
                valid && location?.length == 0 ? <span style={{ color: "red" }}>Please Enter Location</span> : ""
              }

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Description"

                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Customer Name
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Customer Name"

                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Contact Email
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Contact Email"

                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Contact Mobile Number
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Contact Mobile Number"

                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Country"

                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Project Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Project Location"

                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Currency
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder=" Currency"

                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Flag
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Flag"

                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Project Duration
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Project Duration"

                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Project Notes
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Project Notes"

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
                Add Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;




// 