import React from "react";
import UserInfoButton from "./UserInfoButton";


// the whole user info component
const UserInfo = ({userDetails={
    userName:"bhuvan",
    userEmail: "bhuvan@gmail.com",
    startingLetter: "BH",
}}) => {

    const {userName, userEmail, startingLetter} = userDetails

  return (
    <div>
      <h4>My Info</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "88px",
          width: "auto",
          border: "1px solid #DCE9F2",
          borderRadius: "10px",
          alignItems: "center",
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
          <h3>{startingLetter}</h3>
        </div>
        <div >
            <h4 style={{margin: "0px"}}>{userName}</h4>
            <small style={{margin: "0px"}}>{userEmail}</small>
        </div>
        <div style={{marginLeft: "auto", display: "flex", flexDirection: "row"}}>
        <UserInfoButton buttonDetails={{
            name: "Disorder report",
            linkTo: "to url"
        }} />
        <UserInfoButton buttonDetails={{
            name: "Prescription Details",
            linkTo: "to url"
        }} />
        <UserInfoButton buttonDetails={{
            name: "Others",
            linkTo: "to url"
        }} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
