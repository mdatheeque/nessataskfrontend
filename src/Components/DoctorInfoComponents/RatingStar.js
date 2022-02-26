import React from "react";
import { BsStarFill } from "react-icons/bs";

// This is the rating div presented in the doctor info.
const RatingStar = ({rating=''}) => {
  return (
    <div
      style={{
        width: "53px",
        height: "25px",
        backgroundColor: "#08CF93",
        border: "1px solid #08CF93",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "row",
        color: "white",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "0px 15px",
      }}
    >
      <BsStarFill />
      <h4>4.5</h4>
    </div>
  );
};

export default RatingStar;
