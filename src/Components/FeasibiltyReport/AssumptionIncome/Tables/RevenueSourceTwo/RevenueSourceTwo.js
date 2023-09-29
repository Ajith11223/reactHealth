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
          Dental Procedures
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
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <IncomeFromSourceTwo />
        </AccordionBody>
      </Accordion>

    </div>
  );
};
export default RevenueSourceTwo;
