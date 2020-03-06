import React, { useState, useEffect } from 'react';
import CheckBoxOnly from "./CheckBoxOnly";
import './style.css';


const DutiesTable = (props) => {
  console.log(props.data);
  return (

    <div className="row" >
      <table>
        <tbody>
          <tr>
            <th>Application Name</th>
            <th>Manager Name</th>
            <th>User Name</th>
            <th>Git Lab Access</th>
            <th>DB Access</th>
            <th>Linux Server Access</th>
            <th>WebLogic Server Access</th>
            <th>Action</th>
          </tr>
          {props.data.map(servG => {
            console.log(JSON.stringify(servG));
            { console.log(servG.userName) }
            return (
              <tr key={servG.vzId} >
                <td>{servG.appName}</td>
                <td>{servG.managerName}</td>
                <td>{servG.userName}</td>
                <td>{servG.gitLabAccess}<CheckBoxOnly/></td>
                <td>{servG.dbAccess}<CheckBoxOnly/></td>
                <td>{servG.linuxServerAccess}<CheckBoxOnly/></td>
                <td>{servG.weblogicAccess}<CheckBoxOnly/></td>
                <td><button style={submitButtonStyle} >Delete</button></td>
              </tr>
            );



          })}

        </tbody>
      </table>
    </div>

  )
}

export default DutiesTable;
var submitButtonStyle = {
  marginTop: "1px",
  marginBottom: "1px",
  height: 20,
  width: 60,
  borderRadius: 5,
  backgroundColor: "#cd040b",
  color: "#FFF",
  marginLeft: "1px",
  marginRight: "1px",
  
  outline: "none"
}