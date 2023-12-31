import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import DentalProcedures from "./DentalProcedures/Table";
import DermatologyProcedures from "./DermatologyProcedures/Table";
import IncomeFromSourceTwo from "./IncomeFromSourceTwo/Table";

const RevenueSourceTwo = () => {
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
    <div className=" p-4 ">
      <Accordion
        open={open === 1}
        className="mb-2 rounded-lg px-4 "
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 1 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Dental Procedures
          {open === 1 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <DentalProcedures />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 rounded-lg px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 2 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Dermatology Procedures
          {open === 2 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <DermatologyProcedures />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="rounded-lg px-4 mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 3 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Income From Source Two
          {open === 3 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <IncomeFromSourceTwo />
        </AccordionBody>
      </Accordion>

    </div>
  );
};
export default RevenueSourceTwo;
