import React from "react";
import LogsButton from "./LogsButton";
import LogsLabel from "./LogsLabel";

// the whole card component for cards
export default function LogsCard({
  logDetails = {
    status: "upcoming",
    type: "general consulting",
    description: "Lore ipsum dolor sit amet, consectetur adipiscing elit",
    date: "Nov 5",
    year: "2020",
    time: "10.30 AM",
  },
}) {
  const { status, type, description, date, year, time } = logDetails;

  return (
    <div
      style={{
        height: "149px",
        backgroundColor: "white",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
        borderRadius: "7px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        margin: "10px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <LogsLabel status={status} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <small style={{ margin: "0px 2px" }}>{date}</small>
          <h4 style={{ margin: "0px 3px" }}>{year}</h4>
          <small style={{ margin: "0px 3px", color: "blue" }}>{time}</small>
        </div>
      </div>
      <h3>{type}</h3>
      <small style={{ margin: "0PX" }}>{description}</small>
      <div
        style={{
          marginLeft: "auto",
        }}
      >
        {status === "upcoming" && <LogsButton />}
      </div>
    </div>
  );
}
