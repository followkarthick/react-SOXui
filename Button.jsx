import React, { Component } from "react";
/*Button.jsx */
const Button = (props) => {
    console.log(props.style);
    return(
        <button 
            style= {props.style} 
            onClick= {props.action}>    
            {props.title} 
        </button>)
}

export default Button;