import React from "react";


// label component which changes color accordingly with the status given
export default function LogsLabel({ status = "" }) {

  return (
    <div>
      {status === "upcoming" ? (
        <div
          style={{
            height: "23px",
            padding: "0px 15px",
            background: "#08CF93",
            fontSize: "11px",
            color: "white",
            display: "flex",
            alignItems: "center",
            borderRadius: "3px",
          }}
        >
          {status}
        </div>
      ) : (
        <div
          style={{
            height: "23px",
            padding: "0px 15px",
            background: "#1298B7",
            fontSize: "11px",
            color: "white",
            display: "flex",
            alignItems: "center",
            borderRadius: "3px",
          }}
        >
          {status}
        </div>
      )}
    </div>
  );
}
