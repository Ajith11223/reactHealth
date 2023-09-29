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
          Revenue Source No. 5(a)
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceNo5a />
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
          Revenue Source No. 5(b)
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <RevenueSourceNo5b />
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
         Income from Source No.5 
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <IncomeFromSourceNo5 />
        </AccordionBody>
      </Accordion>
    </div>
  );
};
export default RevenueSourceFive;
