import React, { useEffect, useState } from "react";
import GeneralAssumption from "./GeneralAssumption/GeneralAssumption";
import AssumptionIncome from "./AssumptionIncome/AssumptionIncome";
import FormWizard from "react-form-wizard-component";
import "./FeasibilityReport.css"
import { CheckIcon } from '@heroicons/react/20/solid'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { createStep, editSteps, getSteps } from "../../API/ApiRequest";
import { useParams } from "react-router-dom";

const FeasibiltyReport = () => {
  const { fid } = useParams()
  console.log(fid)
  const [rendar,setRendar]=useState(1)
  const [steps, setSteps] = useState([
    { "name": 'Step 1', "status": 'current', "id": 1 },
    { "name": 'Step 2', "status": 'upcoming', "id": 2 },
    { "name": 'Step 3', "status": 'upcoming', "id": 3 },
    { "name": 'Step 4', "status": 'upcoming', "id": 4 },
    { "name": 'Step 5', "status": 'upcoming', "id": 5 },
    { "name": 'Step 6', "status": 'upcoming', "id": 6 },
    { "name": 'Step 7', "status": 'upcoming', "id": 7 },
    { "name": 'Step 8', "status": 'upcoming', "id": 8 },
    { "name": 'Step 9', "status": 'upcoming', "id": 9 },
    { "name": 'Step 10', "status": 'upcoming', "id": 10 },
    { "name": 'Step 11', "status": 'upcoming', "id": 11 },
    { "name": 'Step 12', "status": 'upcoming', "id": 12 },
    { "name": 'Step 13', "status": 'upcoming', "id": 13 },
    { "name": 'Step 14', "status": 'upcoming', "id": 14 },
    { "name": 'Step 15', "status": 'upcoming', "id": 15 },
    { "name": 'Step 16', "status": 'upcoming', "id": 16 },
  ]);


  const stepFun = async () => {
    const { data } = await getSteps(fid)
    console.log(data)
    if (data.data != null) {
      setSteps(data?.data?.steps)
    } else {
      const data = {
        steps: steps,
        feasibilityId: fid
      }
      const create = await createStep(data)
      if(create){
        setRendar((pre)=> pre + 1)
      }
    }
  }


  useEffect(() => {

    stepFun()

  }, [fid,rendar])

  const [currentStepIndexArr, setCurrentStepIndexArr] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {

    setCurrentStepIndexArr(steps?.filter((item) => {
      if (item.status == "complete") {
        return item
      }
    }))

  }, [steps])

  useEffect(() => {
    setCurrentStepIndex(currentStepIndexArr?.length)
    setSelectedIndex(currentStepIndexArr?.length)
  }, [currentStepIndexArr])

  const completeStep = async () => {
    if (currentStepIndex < steps.length - 1) {
      const updatedSteps = [...steps];
      updatedSteps[currentStepIndex] = { ...updatedSteps[currentStepIndex], status: 'complete' };
      updatedSteps[currentStepIndex + 1] = { ...updatedSteps[currentStepIndex + 1], status: 'current' };
      const data = {
        steps: updatedSteps
      }
      const updateDb = await editSteps(data, fid)
      if (updateDb) {
        setSteps(updatedSteps);
        stepFun()
        setCurrentStepIndex(currentStepIndex + 1);
        setSelectedIndex(currentStepIndex)
      }

    }
  };

  const previousStep = async () => {
    if (currentStepIndex > 0) {
      const updatedSteps = [...steps];
      updatedSteps[currentStepIndex] = { ...updatedSteps[currentStepIndex], status: 'upcoming' };
      updatedSteps[currentStepIndex - 1] = { ...updatedSteps[currentStepIndex - 1], status: 'current' };
      const data = {
        steps: updatedSteps
      }
      const updateDb = await editSteps(data, fid)
      if (updateDb) {
        setSteps(updatedSteps);
        stepFun()
        setSteps(updatedSteps);
        setCurrentStepIndex(currentStepIndex - 1);
        setSelectedIndex(currentStepIndex)

      }

    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const handleIndex = (val) => {
    setSelectedIndex(val)
  }

  return (
    <>
      <div className="p-9">

        <nav aria-label="Progress " className="w-fullp-4 " >
          <ol role="list" className="flex items-center ">
            {steps?.map((step, stepIdx) => (
              <li onClick={() => handleIndex(stepIdx)} key={step.name} className={classNames(stepIdx !== steps?.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
                {step.status === 'complete' ? (
                  <>
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="h-2 w-full bg-indigo-600" />
                    </div>

                    <Tooltip title={step.name}>
                      <IconButton>
                        <a
                          href="#"
                          className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
                        >
                          {/* <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" /> */}
                          <span className="text-amber-50" style={{ fontWeight: "500" }}>{stepIdx + 1}</span>

                          {/* <span className="sr-only text-black">{step.name}</span> */}
                        </a>
                      </IconButton>
                    </Tooltip>

                  </>
                ) : step?.status === 'upcoming' ? (
                  <>
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <a
                      href="#"
                      className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                    >

                      <Tooltip title={step?.name}>
                        <IconButton>
                          <span className="text-black" style={{ fontWeight: "400", fontSize: "18px" }}>{stepIdx + 1}</span>

                        </IconButton>
                      </Tooltip>

                      {/* <span className="sr-only"></span> */}
                    </a>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <a
                      href="#"
                      className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                      aria-current="step"
                    >
                      <Tooltip title={step?.name}>
                        <IconButton>

                          <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
                        </IconButton>
                      </Tooltip>
                      <span className="sr-only">{step?.name}</span>
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="p-6 flex justify-between">
          <button
            type="button"
            onClick={previousStep} disabled={currentStepIndex === 0}
            className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={completeStep} disabled={currentStepIndex === steps?.length - 1}
            className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>

        </div>

        <div>
          {
            currentStepIndex == 0 || selectedIndex == 0 && steps[0].status == "complete" ?
              <GeneralAssumption /> : currentStepIndex == 1 || selectedIndex == 1 && steps[1].status == "complete" ? <AssumptionIncome /> :
                currentStepIndex == 2 || selectedIndex == 2 && steps[2].status == "complete" ? "Expense" :
                  currentStepIndex == 3 || selectedIndex == 3 && steps[3].status == "complete" ? "Hr" : "last"
          }
        </div>
      </div>
    </>
  );
};


export default FeasibiltyReport;

// import React, { useState } from 'react'

// const FeasibiltyReport = () => {
//   const [state, setState] = useState(1);

//   return (
//     <div className='p-8' >
//       <ul className="steps" >
//         <li
//           className={
//             state === 1 ||
//               state === 2 ||
//               state === 3 ||
//               state === 4 ||
//               state === 5 ||
//               state === 6 ||
//               state === 7 ||
//               state === 8 ||
//               state === 9 ||
//               state === 10 ||
//               state === 11 ||
//               state === 12 ||
//               state === 13 ||
//               state === 14 ||
//               state === 15 ||
//               state === 16
//               ? 'step step-primary'
//               : 'step'
//           }

//         >
//           Register
//         </li>
//         <li
//           className={

//             state === 2 ||
//               state === 3 ||
//               state === 4 ||
//               state === 5 ||
//               state === 6 ||
//               state === 7 ||
//               state === 8 ||
//               state === 9 ||
//               state === 10 ||
//               state === 11 ||
//               state === 12 ||
//               state === 13 ||
//               state === 14 ||
//               state === 15 ||
//               state === 16
//               ? 'step step-primary'
//               : 'step'
//           }
//         >
//           Choose plan
//         </li>
//         <li
//           className={

//             state === 3 ||
//               state === 4 ||
//               state === 5 ||
//               state === 6 ||
//               state === 7 ||
//               state === 8 ||
//               state === 9 ||
//               state === 10 ||
//               state === 11 ||
//               state === 12 ||
//               state === 13 ||
//               state === 14 ||
//               state === 15 ||
//               state === 16
//               ? 'step step-primary'
//               : 'step'
//           }
//         >
//           Purchase
//         </li>
//         <li className={

//           state === 4 ||
//             state === 5 ||
//             state === 6 ||
//             state === 7 ||
//             state === 8 ||
//             state === 9 ||
//             state === 10 ||
//             state === 11 ||
//             state === 12 ||
//             state === 13 ||
//             state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'
//         }>Receive Product</li>

//         <li className={

//           state === 5 ||
//             state === 6 ||
//             state === 7 ||
//             state === 8 ||
//             state === 9 ||
//             state === 10 ||
//             state === 11 ||
//             state === 12 ||
//             state === 13 ||
//             state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'}>Receive Product</li>
//         <li className={
//           state === 6 ||
//             state === 7 ||
//             state === 8 ||
//             state === 9 ||
//             state === 10 ||
//             state === 11 ||
//             state === 12 ||
//             state === 13 ||
//             state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'}>Receive Product</li>
//         <li className={
//           state === 7 ||
//             state === 8 ||
//             state === 9 ||
//             state === 10 ||
//             state === 11 ||
//             state === 12 ||
//             state === 13 ||
//             state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'}>Receive Product</li>
//         <li className={

//           state === 8 ||
//             state === 9 ||
//             state === 10 ||
//             state === 11 ||
//             state === 12 ||
//             state === 13 ||
//             state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step '}>Receive Product</li>
//         <li className={
//           state === 9 ||
//             state === 10 ||
//             state === 11 ||
//             state === 12 ||
//             state === 13 ||
//             state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'}>Receive Product</li>
//         <li className={

//           state === 10 ||
//             state === 11 ||
//             state === 12 ||
//             state === 13 ||
//             state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'}>Receive Product</li>
//         <li className={

//           state === 11 ||
//             state === 12 ||
//             state === 13 ||
//             state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'}>Receive Product</li>
//         <li className={

//           state === 12 ||
//             state === 13 ||
//             state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'
//         }>Receive Product</li>
//         <li className={

//           state === 13 ||
//             state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'}>Receive Product</li>
//         <li className={

//           state === 14 ||
//             state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'}>Receive Product</li>
//         <li className={

//           state === 15 ||
//             state === 16
//             ? 'step step-primary'
//             : 'step'}>Receive Product</li>
//       </ul>

//       <div>
//         <button onClick={() => setState((pre) => pre + 1)}>Add</button>
//         <br />

//         <button onClick={() => setState((pre) => pre - 1)}>les</button>
//       </div>
//     </div>
//   )
// }

// export default FeasibiltyReport
