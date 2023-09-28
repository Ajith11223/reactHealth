
import React,{useEffect, useState} from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getProjectBasedFeasiblity } from "../../API/ApiRequest";
import FeasibiltyModal from "./FeasibiltyModal";
import FeasibilityTable from "./Feasibiltytable";


const FeasibilityList=()=> {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  // feasiblity data  state
  const [feasibilityData,setFeasibilityData]=useState([])

  const { id } = useParams();

  const fetchFeasibilty = async () => {
  
    const {data} = await getProjectBasedFeasiblity(id)
    setFeasibilityData(data?.getData)
  }


  useEffect(()=>{
    fetchFeasibilty()
  },[id])


  const closeModal = () => {
    setIsModalOpen(false);
    fetchFeasibilty()

  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 177px", // Adjust column widths as needed
          alignItems: "center", // Center items vertically
          gap: "10px", // Adjust the gap between items as needed
          marginTop: "30px",
          paddingInline: "40px",
          marginRight: "50px",
        }}
      >
        <h3 className="top-0 left-0 [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#262628] text-[24px] tracking-[-0.84px] leading-[normal]">
          Financial Feasibility Report
        </h3>
        <button
          style={{
            height: "49px",
            width: "100%", // Take full available width
            borderRadius: "13px",
            backgroundColor: "#36C857",
            fontSize: "18px",
            lineHeight: "21.47px",
            color: "white",
            cursor: "pointer",
          }}
          onClick={openModal}>
          Add new feasibility
        </button>
        <FeasibiltyModal isModalOpen={isModalOpen} closeModal={closeModal} projectId={id} />

      </div>
      <div>
        <FeasibilityTable feasibilityData={feasibilityData} projectId={id}/>
      </div>
    </div>
  );
}

export default FeasibilityList;