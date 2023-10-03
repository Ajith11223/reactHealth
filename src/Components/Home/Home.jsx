import React from "react";
import Card from "../TailwindCard/Card";

const people = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },

  // More people...
];

const Home = () => {
  return (
    <div className="bg-gray-100">
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
      <div className="h-[307px] bg-[#2A2A5E]">

      </div>
    </div>
  );
};

export default Home;
