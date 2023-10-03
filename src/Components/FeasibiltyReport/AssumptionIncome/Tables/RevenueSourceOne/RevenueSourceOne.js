import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SrConCardiologist from "./SrConCardiologist/Table";
import ConInternalMedicine from "./SrConCardiologist/Table";
import ConRadiology from "./ConRadiology/Table";
import ConPediatrics from "./ConPediatrics/Table";
import ConGynecologist from "./ConGynecologist/Table";
import ConOrthopedic from "./ConOrthopedic/Table";
import ConUrology from "./ConUrology/Table";
import ConFamilyMedicine from "./ConFamilyMedicine/Table";
import ConGeneralSurgery from "./ConGeneralSurgery/Table";
import ConGastroentrologist from "./ConGastroentrologist/Table";
import ConDentist from "./ConDentist/Table";
import Dermatology from "./Dermatology/Table";
import ConOpthalmology from "./ConOpthalmology/Table";
import EmergencyMedicine from "./EmergencyMedicine/Table";
import DieticianAndNutritionClinic from "./DieticianAndNutritionClinic/Table";
import Revenue from "./Revenue(PA)/Table";

const RevenueSourceOne = () => {
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
    <div className=" p-4 bg-gray-50 rounded-b-lg">
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
          Sr Con Cardiologist
          {open === 1 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <SrConCardiologist />
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
          Con Internal Medicine
          {open === 2 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConInternalMedicine />
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
          Con Radiology
          {open === 3 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConRadiology />
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 4}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 4 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Con Pediatrics
          {open === 4 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConPediatrics />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 5}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 5 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Con Gynecologist
          {open === 5 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConGynecologist />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 6}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 6 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Con Orthopedic
          {open === 6 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConOrthopedic />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 7}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 7 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Con Urology
          {open === 7 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConUrology />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 8}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 8 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Con Family Medicine
          {open === 8 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConFamilyMedicine />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 9}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(9)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 9 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Con General Surgery
          {open === 9 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConGeneralSurgery />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 10}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(10)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 10 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Con Gastroentrologist
          {open === 10 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConGastroentrologist />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 11}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(11)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 11 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Con Dentist
          {open === 11 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConDentist />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 12}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(12)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 12 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Dermatology (Skin)
          {open === 12 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <Dermatology />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 13}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(13)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 13 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Con Opthalmology
          {open === 13 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <ConOpthalmology />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 14}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(14)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 14 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Emergency Medicine (Specialist)
          {open === 14 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <EmergencyMedicine />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 15}
        className="rounded-lg px-4 mb-2"      >
        <AccordionHeader
          onClick={() => handleOpen(15)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 15 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Dietician & Nutrition Clinic
          {open === 15 ? (
            firstSvgIcon
          ) : (
            secondSvgIcon
          )}

        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          <DieticianAndNutritionClinic />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 16}
        className="rounded-lg px-4 mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(16)}
          className={`bg-white  p-5 h-[50px] rounded-lg  transition-colors ${
            open === 16 ? "text-white bg-blue-500 p-5" : ""
          }`}
        >
          Revenue (p.a)
          {open === 16 ? (
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
export default RevenueSourceOne;
