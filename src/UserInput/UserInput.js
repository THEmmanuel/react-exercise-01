import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
    return (
    <div className = "userinput">
        <input className = "input" type = "text" onChange = {props.changed} value = {props.value}></input>
    </div>
    )
}

export default UserInput;