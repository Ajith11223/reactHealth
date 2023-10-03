import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Revenue from "./Revenue/Table";
import InpatientsBed from "./InpatientBeds/Table";
import VIPInpatientBeds from "./VIPInpatientBeds/Table";
import GeneralInpatientBeds from "./GeneralInpatientBeds/Table";
import SpecialBeds from "./SpecialBeds/Table";

const RevenueSourceFour = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className=" p-4 rounded-b-lg bg-gray-50">
      <Accordion
        open={open === 1}
        className="mb-2 rounded-lg  px-4 "
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 1 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Inpatient Beds
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <InpatientsBed />
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
          a) VIP Inpatient Beds
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <VIPInpatientBeds />
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
          b) General Inpatient Beds
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <GeneralInpatientBeds />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        className="rounded-lg px-4 mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 4 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          c) Special Beds (ICU,CCU,NICU,HDU)
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <SpecialBeds />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 5}
        className="rounded-lg px-4 mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 5 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Revenue(p.a)
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <Revenue />
        </AccordionBody>
      </Accordion>
    </div>
  );
};
export default RevenueSourceFour;
