import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
    return (
    <div className = "useroutput">
        <p>{props.children}</p>
        <p> This will be overwritten</p>
    </div>
    )
}

export default UserOutput;