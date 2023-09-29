import React, { useState } from "react";
import { Box, styled, Typography, Button } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiRightIndent } from "react-icons/bi";
import './CustomCard.css'
import procjectIcon from '../../Images/procjectIcon.png'

const CustomCard = ({ img, date, item, likes, heart, share }) => {

  const ServiceBox = styled(Box)(({ theme }) => ({
    borderRadius: "16px",
    width: "345px",
    height: "243px",
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
    "&:hover": {
      backgroundColor: "#4A4BE4",
      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
      transform: "scale(1.05)",
      transition: "all 0.3s ease-in-out",
      color: "white",
      "& img": {
        filter: "brightness(0) invert(1)", // Change image color to white on hover
      },
      "&.dots-icon": {
        filter: "brightness(0) invert(1)" // Change color to white on hover 
      },
      "& Button": {
        filter: "brightness(0) invert(1)", // Change image color to white on hover
      }


    },
  }));
  const ImgContainer = styled(Box)(() => ({
    width: "100%",
    textAlign: "center",
    marginLeft: "15px",
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },


  }));
  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  const buttonStyles = {
    color: "black", // Set text color to black
    background: "none", // Set background to none
    border: `1px solid black`, // Add a border with black color
    borderRadius: "10px", // Add border radius
    height: "23px",
    width: "79px",
    opacity: isActive ? 1 : 0.8,
    marginRight: "10px",
    marginTop: "20px"
  };
  return (
    <ServiceBox
      sx={{
        justifyContent: "center",
        alignItems: "center",
        pt: "20px",
        pb: "10px",
      }}

    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}

      >
        <ImgContainer>
          <img
            src={procjectIcon}
            alt=""
            style={{ fontSize: "44px" }}

          />
          {/* <BiRightIndent  className="abc"/> */}
        </ImgContainer>
        <b>
          <BsThreeDotsVertical className="dots-icon" style={{ height: "20px", width: "20px", marginBottom: "15px", marginRight: "15px", fontWeight: "bold" }} />

        </b>
      </div>

      <Box sx={{ padding: "1 rem", marginLeft: "15px" }}>
        <CustomBox>
          <Box>
            <Typography variant="body2" sx={{ marginTop: "90px", display: "flex", justifyContent: "space-between", gap: "130px" }}>
              <div style={{ display: "flex", textAlign: "start", flexDirection: "column" }}>
                <b style={{ fontSize: "20px" }}>{item}</b>
                <p style={{ marginRight: "11px", fontSize: "16px", fontFamily: "poppins" }}>{"12 03 2022"}</p>

              </div>

              <Box >
                <Button style={buttonStyles} onClick={toggleActive}>
                  {isActive ? "Active" : "Inactive"}
                </Button>
              </Box>
            </Typography>
          </Box>

        </CustomBox>
      </Box>
    </ServiceBox>
  );
};

export default CustomCard;
