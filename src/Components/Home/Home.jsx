import React from "react";
import Card from "../TailwindCard/Card";
import HomeBanner from "../../Images/Home_Banner.png";
import './Home.css'



const Home = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="w-screen flex justify-items-center relative"
        style={{
          height: "0",
          paddingBottom: `${(262 / 1443) * 100}%`, // Aspect ratio (262px height for 1443px width)
          backgroundImage: `url(${HomeBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          maxWidth: "100%",
        }}
      >
        <div className="grid  grid-cols-2 relative">
          <div
            className=" text-justify xl:p-24 lg:p-16 md:p-10 sm:p-5"
            style={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "3.33vw",
              color: "#2A2A5E",
              lineHeight: "1",
            }}
            id="heading-banner"
          >
            Lorem ipsum <br />
            dollo dummy
          </div>
          <div
            className="absolute text-justify xl:p-28 lg:p-16 md:p-10 sm:p-5 invisible sm:visible pl-12 right-[180px]"
            style={{
              color: "#584949",
              fontSize:"18px",
            }}
            id="content-banner"
          >
            
            Porem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit. sit <br /> amet, consectetur
            adipisc
          </div>
        </div>{" "}
      </div>
      <h1
        className="text-center p-10 pb-0"
        style={{
          fontFamily: " Poppins",
          lineHeight: "67px",
          fontWeight: "700",
          fontSize: "32px",
          color: "#322A2A",
        }}
      >
        Our Services
      </h1>
      <div className="flex items-center justify-center">
        <Card />
      </div>
      <div className="h-[307px] bg-[#2A2A5E]"></div>
    </div>
  );
};

export default Home;
