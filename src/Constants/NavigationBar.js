//react import
import React from "react";

//exported logo from the figma file import
import { ReactComponent as Logo } from "../creative/Subtract.svg";
import { ReactComponent as Characters } from "../creative/ognition.svg";

// react icons import
import { FiSearch } from "react-icons/fi";
import { FaRegBell, FaUser, FaAngleDown } from "react-icons/fa";

// Navigation constant component with props
const NavigationBar = ({userDetails={
    userName: "Bhuvan",
    notifications: []
}}) => {

    const {userName, notifications} = userDetails

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12,1fr)",
        columnGap: "30px",
        background:
          "linear-gradient(199.83deg, #138DC1 -28.65%, #09C883 204.34%)",
        height: "71px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          gridColumn: "2/12",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Logo />
        <Characters />
        <div
          style={{
            height: "35px",
            width: "180px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: "4px",
            padding: "0px 4px",
            marginLeft: "auto",
          }}
        >
          <input
            style={{
              border: "none",
              background: "none",
              display: "flex",
              height: "32px",
              width: "150px",
              color: "white",
            }}
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
          <FiSearch style={{ color: "white" }} size={40} />
        </div>
        <FaRegBell style={{ color: "white", marginLeft: "25px" }} size={25} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "32px",
            width: "32px",
            backgroundColor: "white",
            borderRadius: "6px",
            marginLeft: "25px"
          }}
        >
          <FaUser style={{opacity: "0.4"}} />
        </div>
        <h5 style={{ color: "white", marginLeft: "10px" }}>{userName}</h5>
        <FaAngleDown style={{marginLeft: "15px" }} />
      </div>
    </div>
  );
};

export default NavigationBar;
