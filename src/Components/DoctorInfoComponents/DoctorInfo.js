import React from "react";
import RatingStar from "./RatingStar";
import DocPrimaryButton from "./DocPrimaryButton";
import DocSecondaryButton from "./DocSecondaryButton";

// the whole doctor info component
const DoctorInfo = ({
  docDetails = {
    docName: "name",
    docEmailId: "doc@gmail.com",
    docStartingLetters: "DO",
    docRating: "4.5",
    docSummary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.?Lorem
    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.`,
    docExp: 8,
    docActivePatients: 123,
    docTreatedPatients: 125,
  },
}) => {
  const {
    docName,
    docEmailId,
    docStartingLetters,
    docRating,
    docSummary,
    docExp,
    docActivePatients,
    docTreatedPatients,
  } = docDetails;

  return (
    <div>
      <h4>Assigned Dcotor Details</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "412px",
          width: "auto",
          border: "1px solid #DCE9F2",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "20px 0px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background:
                "linear-gradient(158.4deg, #10A0AD 6.79%, #36CBD9 89.66%)",
              borderRadius: "1000px",
              margin: "0px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <h3>{docStartingLetters}</h3>
          </div>
          <div>
            <h4 style={{ margin: "0px" }}>{docName}</h4>
            <small style={{ margin: "0px" }}>{docEmailId}</small>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <RatingStar rating={docRating} />
          </div>
        </div>
        <small
          style={{
            margin: "20px",
          }}
        >
          {docSummary}
        </small>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "0px 20px",
            justifyContent: "space-around"
          }}
        >
          <div
            style={{
              margin: "0px 5px",
              width: "219px",
              height: "101px",
              border: "1px solid #CDE2F0",
              boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.03)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 style={{ margin: "5px 0px", textAlign: "center" }}>{docExp}</h2>
            <small style={{ margin: "0px", textAlign: "center" }}>
              Years of experience
            </small>
          </div>
          <div
            style={{
              margin: "0px 5px",
              width: "219px",
              height: "101px",
              border: "1px solid #CDE2F0",
              boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.03)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                margin: "5px 0px",
                textAlign: "center",
                color: "#0CC895",
              }}
            >
              {docActivePatients}
            </h2>
            <small style={{ margin: "0px", textAlign: "center" }}>
              Active Patients
            </small>
          </div>
          <div
            style={{
              margin: "0px 5px",
              width: "219px",
              height: "101px",
              border: "1px solid #CDE2F0",
              boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.03)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                margin: "5px 0px",
                textAlign: "center",
                color: "#3798F1",
              }}
            >
              {docTreatedPatients}
            </h2>
            <small style={{ margin: "0px", textAlign: "center" }}>
              Treated Patients
            </small>
          </div>
        </div>
        <div
          style={{
            margin: "30px 0px",
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
          }}
        >
          <DocSecondaryButton buttonName="Chat" />
          <DocPrimaryButton buttonName="Book Consultation" />
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
