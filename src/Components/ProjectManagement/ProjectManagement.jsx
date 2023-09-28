import React, { useEffect, useState } from 'react'
import { BsFillXSquareFill } from 'react-icons/bs'
import CustomCard from '../Common/CustomCard'
import ProjectModal from '../Modal/ProjectModal'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { testApi } from '../../API/API'

const ProjectManagement = () => {

    // navigate to another page 
    const navigate = useNavigate()

    const [active, setActive] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    // user fro  redux store
    const user = useSelector((state) => state.counter.user)


    const [userProjects, setUserProjects] = useState([])

    const fetchData = async () => {
        const dataObj = {
            "_id": user.id // 650be7cb7f219f8d321d527d
        }
        try {
            if(user.id){
                const { data } = await testApi.post('/project/getPrj', dataObj)
                setUserProjects(data?.getData)
            }
            
        } catch (error) {

        }
    }


    const closeModal = () => {
        setOpenModal(false)
        fetchData()
    }

    // functionalty initialy fetching
    useEffect(() => {
        fetchData()
    }, [user.id])

    // navgation add
    const handleRoute =(projectId)=>{
        navigate(`/user/project/${projectId}`)
    }
    return (
        <>
            <div className={active ? "" : "hidden"}>
                <div style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} className='p-2 rounded-sm w-full'>
                    <div style={{ textAlign: "end" }}>
                        <button>
                            <BsFillXSquareFill
                                // style={closeIconStyles} box-shadow: ;
                                onClick={() => setActive(false)}
                            />
                        </button>
                    </div>
                    <h5
                        className="text-[40px] font-medium font-helvetica-neue text-black-1 text-left"
                        id="exampleModalXlLabel"
                        style={{ fontFamily: " Poppins" }}
                    >
                        Hello, John Doe
                    </h5>
                    <br />
                    <p className="text-[18px] font-helvetica-neue text-black-body text-left" style={{ fontFamily: " Poppins" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                        vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>
            </div>

            {/* card area */}
            <div style={{ display: "flex", justifyContent: "space-between" }} className='m-5' >
                <h4 style={{ fontFamily: "poppins", fontWeight: "550" }}
                    className="top-0 left-0  text-[#262628] text-[24px] tracking-[-0.84px] leading-[normal]"
                >My projects</h4>
                <div>
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
                            padding: "14px 22px"
                        }}
                        onClick={() => setOpenModal(true)}
                    >Add new project</button>
                </div>
            </div>
            <ProjectModal openModal={openModal} closeModal={closeModal} />
            <div class="container mx-auto p-8">
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">

                    {
                        userProjects?.map((HospitalServices)=>{
                            return(
                                <div onClick={()=> handleRoute(HospitalServices._id)}>
                                
                                <CustomCard
                                   key={HospitalServices._id}
                                   img={HospitalServices.img}
                                   item={HospitalServices.name}
                                   date={HospitalServices.location}
                                   location={HospitalServices.location}
                                />
                                </div>
                            )
                        })
                    }

                </div>
            </div>


        </>
    )
}

export default ProjectManagement