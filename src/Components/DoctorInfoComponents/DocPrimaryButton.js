import React from 'react'
import {BsCalendarWeek} from 'react-icons/bs'

// Primary button used in the doctor info component
export default function DocPrimaryButton({buttonName="button"}) {
  return (
    <div
      style={{
        height: "36px",
        background: "linear-gradient(180deg, #1BA7A7 0%, #0A7979 114.29%)",
        border: "0.5px solid #0F8686",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 10px",
        padding: "0px 15px",
        color: 'white',
        cursor: "pointer"
      }}
    >
        <BsCalendarWeek size={16} />
        <h5 style={{margin: "0px 5px"}}>{buttonName}</h5>
    </div>
  )
}
