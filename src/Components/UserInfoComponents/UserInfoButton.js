import React from 'react'


// button provided in the user info component
const UserInfoButton = ({buttonDetails= {
    name: "button",
    linkTo: "URL",
}}) => {

    const {name, linkTo} = buttonDetails

  return (
    <div
    style={{
        backgroundColor: "rgba(28,188,202, 0.1)",
        height: "34px",
        width: "auto",
        borderRadius: "4px",
        color: "rgba(18, 152, 183, 1)",
        display: "flex",
        cursor: "pointer",
        margin: "0px 10px"
    }}
    >
        <p style={{margin: "auto 10px", fontSize: "13px"}}>{name}</p>
    </div>
  )
}

export default UserInfoButton
