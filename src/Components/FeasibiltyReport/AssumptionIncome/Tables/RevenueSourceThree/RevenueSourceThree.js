import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Diagnostics from "./Diagnostics/Table";
import Imaging from "./Imaging/Table";
import EchoCardiogram from "./EchoCardiogram/Table";
import ECG from "./ECG/Table";
import StressTests from "./StressTests/Table";
import HolterTests from "./HolterTests/Table";
import TransesophagelAndDobutamineStressTest from "./TransesophagelAndDobutamineStressTest/Table";
import Revenue from "./Revenue/Table";

const RevenueSourceThree = () => {
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
    <div className="p-4 rounded-b-lg bg-gray-50" >
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
          Diagnostics -  Pathology & Phlebetomy (Outsourced)
          {open === 1 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <Diagnostics />
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
          Imaging (X-Ray, Ultrasound, DXA scan, MRI etc)
          {open === 2 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <Imaging />
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
          Echo Cardiogram
          {open === 3 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <EchoCardiogram />
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
          Stress Tests
          {open === 4 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <StressTests />
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
          Holter Tests
          {open === 5 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <HolterTests />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 6}
        className="rounded-lg px-4 mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 6 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
           Transesophageal & Dobutamine Stress Test
           {open === 6 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <TransesophagelAndDobutamineStressTest />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 7}
        className="rounded-lg px-4 mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 7 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          E C G
          {open === 7 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ECG />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 8}
        className="rounded-lg px-4 mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 8 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Revenue (p.a.)
          {open === 8 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <Revenue />
        </AccordionBody>
      </Accordion>


    </div>
  );
};
export default RevenueSourceThree;
