import React from "react";
import {BsChatRightText} from 'react-icons/bs'


//secondary button used in the doctor info comopnent
export default function DocSecondaryButton({buttonName="button"}) {
  return (
    <div
      style={{
        height: "36px",
        border: "0.5px solid #0F8686",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 10px",
        padding: "0px 15px",
        cursor: "pointer"
      }}
    >
        <BsChatRightText size={16} />
        <h5 style={{margin: "0px 5px"}}>{buttonName}</h5>
    </div>
  );
}
