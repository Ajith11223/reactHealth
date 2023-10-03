import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import IncomeFromSourceNo5 from "./IncomeFromSourceNo5/Table";
import RevenueSourceNo5a from "./RevenueSourceNo5a/Table";
import RevenueSourceNo5b from "./RevenueSourceNo5b/Table";

const RevenueSourceFive = () => {
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
    <div className=" p-4 rounded-b-lg bg-gray-50">
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
          Revenue Source No. 5(a)
          {open === 1 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceNo5a />
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
          Revenue Source No. 5(b)
          {open === 2 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceNo5b />
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
         Income from Source No.5 
         {open === 3 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <IncomeFromSourceNo5 />
        </AccordionBody>
      </Accordion>
    </div>
  );
};
export default RevenueSourceFive;
