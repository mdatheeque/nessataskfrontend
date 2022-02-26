//react import
import React from "react";

// react icons import
import { SiGooglechat } from "react-icons/si";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

//react router dom import to navigate to consultaion page from this dashboad page
import { Link } from "react-router-dom";

// Sub nav bar which is present below the main Navigation bar
// This has two conditions
// if its consultation then its different and if its dashboard then its different
const SubNaBar = ({ pageName = "" }) => {
  return (
    <div>
      {pageName === "Consultation" ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            columnGap: "30px",
            height: "53px",
            alignItems: "center",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
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
            <p style={{ margin: "0px 10px" }}>Home</p>
            <p style={{ margin: "0px 10px" }}>
              {" "}
              <AiOutlineRight />{" "}
            </p>
            <SiGooglechat style={{ color: "sandybrown" }} />
            <h4 style={{ margin: "0px 10px" }}>{pageName}</h4>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12,1fr)",
            columnGap: "30px",
            height: "53px",
            alignItems: "center",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
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
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div
                style={{
                  height: "41px",
                  background: "#FFFFFF",
                  border: "0.5px solid #0F8686",
                  boxShadow: "0px 4px 4px rgba(34, 78, 114, 0.0327)",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                <p style={{ margin: "0px 10px" }}>
                  <AiOutlineLeft />
                </p>
                <h4 style={{ margin: "0px 10px" }}>{pageName}</h4>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubNaBar;
