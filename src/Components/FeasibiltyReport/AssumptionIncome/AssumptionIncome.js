import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import TableA from "./Tables/TableA/TableA";
import TableB from "./Tables/TableB/TableB";
import RevenueSourceOne from "./Tables/RevenueSourceOne/RevenueSourceOne";
import RevenueSourceTwo from "./Tables/RevenueSourceTwo/RevenueSourceTwo";
import RevenueSourceThree from "./Tables/RevenueSourceThree/RevenueSourceThree";
import RevenueSourceFour from "./Tables/RevenueSourceFour/RevenueSourceFour";
import RevenueSourceFive from "./Tables/RevenueSourceFive/RevenueSourceFive";
import RevenueSourceSix from "./Tables/RevenueSourceSix/RevenueSourceSix";
import RevenueSourceSeven from "./Tables/RevenueSourceSeven/Table";
import RevenueSourceEight from "./Tables/RevenueSourceEight/Table";
import RevenueSourceNine from "./Tables/RevenueSourceNine/Table";
import RevenueSourceTen from "./Tables/RevenueSourceTen/Table";
import RevenueSourceEleven from "./Tables/RevenueSourceEleven/Table";
import OtherRevenueSource1 from "./Tables/OtherRevenueSource1/Table";
import OtherRevenueSource2 from "./Tables/OtherRevenueSource2/Table";

const AssumptionIncome = () => {
  const [open, setOpen] = React.useState(1);

  const firstSvgIcon = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 ml-auto"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
  );
  const secondSvgIcon = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 ml-auto"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>

  );

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-[100%] p-4">
      <div className="ml-3 p-3">
        <h4
          style={{
            fontFamily: "poppins",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Assumptions Income
        </h4>
      </div>

        <Accordion open={open === 1} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 1 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Table A
          {open === 1 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <TableA />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 2 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Table B
          {open === 2 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <TableB />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg px-4 mb-2">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 3 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 1 (Out-Patient Department / Consultation Fees)
          {open === 3 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceOne />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 4 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 2 (OPD Procedures- Dental and Dermatology)
          {open === 4 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceTwo />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 5 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 3 (Diagnostic & Imaging)
          {open === 5 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceThree />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 6 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 4 (Admissions)
          {open === 6 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceFour />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 7 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 5 (Rehabilitation)
          {open === 7 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceFive />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 8 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 6 (Pharmacy)
          {open === 8 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceSix />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(9)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 9 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 7 (Cafetaria)
          {open === 9 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceSeven />
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 10} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(10)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 10 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 8 (OT Procedures)
          {open === 10 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceEight />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 11} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(11)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 11 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 9 (Labor Deliveries)
          {open === 11 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceNine />
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 12} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(12)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 12 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 10 (HIV Center)
          {open === 12 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceTen />
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 13} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(13)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 13 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Revenue Source No. 11 (Accommodation)
          {open === 13 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceEleven />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 14} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(14)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 14 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Other Revenue Source 1
          {open === 14 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <OtherRevenueSource1 />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 15} className="mb-2 rounded-lg px-4">
        <AccordionHeader
          onClick={() => handleOpen(15)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 15 ? "text-white bg-blue-700 p-5" : ""
          }`}
        >
          Other Revenue Source 2
          {open === 15 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <OtherRevenueSource2 />
        </AccordionBody>
      </Accordion>
    </div>
  );
};
export default AssumptionIncome;
