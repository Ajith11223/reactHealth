import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import OPDs from "./OPDs/Table";
import NoOfAdmissions from "./NoOfAdmissions/Table";
import Injections from "./Injections/Table";
import NoOfInjections from "./NoOfInjections/Table";
import IncomeFromSourceNo6 from "./IncomeFromSourceNo6/Table";

const RevenueSourceSix = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className=" p-4">
      <Accordion
        open={open === 1}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4 "
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          No. of OPDs
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <OPDs />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          No. of Admissions
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <NoOfAdmissions />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="rounded-lg border border-blue-gray-100 px-4 mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Injections
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <Injections />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        className="rounded-lg border border-blue-gray-100 px-4 mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Cost of Injections
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <NoOfInjections />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 5}
        className="rounded-lg border border-blue-gray-100 px-4 mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition-colors ${
            open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Income from Source No.6
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <IncomeFromSourceNo6 />
        </AccordionBody>
      </Accordion>
    </div>
  );
};
export default RevenueSourceSix;
