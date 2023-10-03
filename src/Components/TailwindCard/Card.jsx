import HealthCareListingImg from "../../Images/HealthCareListing.png";
import HealthIndustrySupportSystem from "../../Images/HCSupportSystem.png";
import HCHRmanagement from "../../Images/HC-HR-management.png";
import MarketIntelligence from "../../Images/Market Intelligence & Research.png";
import Accreditation from "../../Images/Accreditation & Information Services.png";

const Services = [
  {
    id: 1,
    name: "Health care\n listing",
    imageUrl: HealthCareListingImg,
    Hovering: "Health care listing",

  },
  {
    id: 2,
    name: "Health Industry\n support system",
    imageUrl: HealthIndustrySupportSystem,
    Hovering: "Health Industry support system",
  },
  {
    id: 3,
    name: "Health care human\n resource management",
    imageUrl: HCHRmanagement,
    Hovering: "Health care human resource management",
  },
  {
    id: 4,
    name: "Market Intelligence\n & Research",
    imageUrl: MarketIntelligence,
    Hovering: "Market Intelligence & Research",
  },
  {
    id: 5,
    name: "Accreditation &\n Information Services",
    imageUrl: Accreditation,
    Hovering: "Accreditation & Information Services",
  },

  // More people...
];

export default function Card() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-20">
      {Services.map((items) => (
        <li
          key={items.id}
          className="relative col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow w-[294px] h-[267px] group"
        >
          <div className="flex flex-1 flex-col p-4">
            <div className="h-[82px] w-[83px] rounded-lg bg-card-green flex justify-center items-center">
              <img
                className="mx-auto  flex-shrink-0 z-100"
                src={items.imageUrl}
                alt=""
              />
            </div>
            <div
              className="flex flex-wrap h-[48px] whitespace-pre-line"
              style={{ marginTop: "90px", fontWeight: 500, fontSize: "20px" }}
            >
              <h3 className="text-left font-medium text-black">{items.name}</h3>
            </div>
          </div>
          {/* Hover content */}
          <div className="hidden group-hover:flex absolute inset-0 bg-white opacity-90 p-4 items-center justify-center rounded-lg">
            <p className="text-gray-900 font-bold">{items.Hovering}</p>
          </div>{" "}
        </li>
      ))}
    </ul>
  );
}
