// react import
import { Fragment, useEffect, useState } from "react";

// Components related to consulation page import
import LogsCard from "../Components/CallLogsComponents/LogsCard";
import DoctorInfo from "../Components/DoctorInfoComponents/DoctorInfo";
import UserInfo from "../Components/UserInfoComponents/UserInfo";

// Contant components import
import NavigationBar from "../Constants/NavigationBar";
import SubNavBar from "../Constants/SubNavBar";

// api call from the helper
import { getCallLogs } from "../helper/apicalls";

// initial state which contains all the data.
// NOTE : This can be treated like a global state and data can be passed accordingly
// If this is introdruced to REDUX or CONTEXT API
function Consultation() {
  const initialState = {
    userDetails: {
      userName: "Muhammed Atheeque",
      userEmail: "namaelite@gmail.com",
      startingLetter: "MU",

      notifications: [
        "notification1",
        "notification2",
        "notification3",
        "notification4",
      ],
    },

    docInfo: {
      docName: "Dr. Manoj",
      docEmailId: "manoj@mail.com",
      docRating: "4.5",
      docStartingLetters: "MA",
      docSummary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.?Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.`,
      docExp: 8,
      docActivePatients: 123,
      docTreatedPatients: 125,
    },
  };

  // LOCAL state for storing the call logs
  const [logs, setLogs] = useState([]);

  // Use effect to execute the call logs on load
  useEffect(() => {
    const preload = () => {
      getCallLogs().then((data) => {
        console.log(data);
        setLogs(data.data);
      });
    };

    preload();
    console.log(logs);
  });

  return (
    <Fragment>
      {/* Constants component - start */}
      <NavigationBar userDetails={initialState.userDetails} />
      <SubNavBar pageName="Consultation" />
      {/* Constants component - end */}

      {/* Body part of the consultation page - start */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12,1fr)",
          columnGap: "30px",
        }}
      >
        {/* User Info and Doctor info on a same grid displayed with flex - start */}
        <div
          style={{
            gridColumn: "2/8",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <UserInfo userDetails={initialState.userDetails} />
          <DoctorInfo docDetails={initialState.docInfo} />
        </div>
        {/* User Info and Doctor info on a same grid displayed with flex - end */}

        {/* Call logs info on the second grid and the fetched data is looped to create cards - start */}
        <div
          style={{
            gridColumn: "8/12",
            display: "flex",
            flexDirection: "column",
            background: "#FAFAFA",
            padding: "0px 20px",
          }}
        >
          <h4>CALL LOGS</h4>

          {/* Looping of logs card - start */}
          {logs.map((eachLog, index) => (
            <LogsCard key={index} logDetails={eachLog} />
          ))}
          {/* Looping of logs card - end */}
        </div>
        {/* Call logs info on the second grid and the fetched data is looped to create cards - end */}
      </div>
      {/* Body part of the consultation page - end */}
    </Fragment>
  );
}

export default Consultation;
