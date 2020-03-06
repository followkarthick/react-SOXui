import React, { useState } from 'react';
import DutiesTable from "./DutiesTable";
import styled from 'styled-components';

const API_URL = "https://www.mocky.io/v2/5e623983300000ec804d588e";
 const API_URLB = "https://www.mocky.io/v2/5e62a49a300000ec804d5b79";
export default () => {
  const [details, setDetails] = useState([]);
  const [applicationName, setapplicationName] = useState('');
  const [managerName, setmanagerName] = useState('');
  const [gitlabDetails, setgitlabDetails] = useState('');
  const [dbDetails, setdbDetails] = useState('');
  const [linuxDetails, setLinuxDetails] = useState('');
  const [weblogicDetails, setWeblogicDetails] = useState('');

  const submitValue = async () => {
    const frmdetails = {
      'applicationName': applicationName,
      'managerName': managerName,
      'gitlabDetails': gitlabDetails,
      'dbDetails': dbDetails,
      'linuxDetails': linuxDetails,
      'weblogicDetails': weblogicDetails

    }
    alert(JSON.stringify(frmdetails));
    let res = await fetch(API_URLB, {
      method: "POST",
      body: JSON.stringify(frmdetails),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    let response = await res.json();
    console.log(response);
    alert(JSON.stringify(response));
    setDetails(details = response);
  }

  return (
    <div >
      <TitleHeader>Segregation Of Duties  </TitleHeader>
      <div style={{display: 'flex',direction: 'column'}}>
      <SearchContainer>
        <CardBox>
          <CardBoxHeader> Search Options</CardBoxHeader>

          <input type="text" placeholder="Enter your Application Name" onChange={e => setapplicationName(e.target.value)} />
          <input type="text" placeholder="Enter your Manager Name" onChange={e => setmanagerName(e.target.value)} />
          <input type="text" placeholder="Enter your Git Lab Details" onChange={e => setgitlabDetails(e.target.value)} />
          <input type="text" placeholder="Enter your DB Details" onChange={e => setdbDetails(e.target.value)} />
          <input type="text" placeholder="Enter your Linux Server Details" onChange={e => setLinuxDetails(e.target.value)} />
          <input type="text" placeholder="Enter your Weblogic Server Details" onChange={e => setWeblogicDetails(e.target.value)} />
          <button style={submitButtonStyle} onClick={submitValue}>Submit</button>

        </CardBox>
      </SearchContainer>
      <DutiesTable data={details} />
      </div>
    </div>
  )
}



const SearchResults = styled.div`
  text-align: center;
  color: red;
`;

const SearchContainer = styled.div`
  display: flex;
  
`;


const CardBox = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    
    background-color: white;
    margin: 1em;   
    border-radius: 5px;
   font-family: sans-serif;  
    display: flex;
    flex-direction: column;
    align:center;
   
`;


const CardBoxHeader = styled.div`
margin-bottom: 0;
    padding: 6px;
    border-bottom: 1px solid rgba(0,0,0,.125);    
    font-weight: bold;
    text-align: left;
    background-color: #cd040b;
    color: white;
    font-family: sans-serif; 
    font-size: medium;   
    border-radius: 3px;
`;

const TitleHeader = styled.div`
 text-align: left;
    background-color: lightgrey;
    height: 30px;
   padding: 10px;
    color: black;
    font-family: sans-serif;
    font-size: 11pt;
    font-weight: bold;
    border-radius: 3px;
`;

const SubHeader = styled.div`
 text-align: left;    
   padding: 10px;
    color: black;
    font-family: sans-serif;
    font-size: 11pt;
    font-weight: bold;
    border-radius: 3px;
`;

var submitButtonStyle = {
  marginTop: "1px",
  marginBottom: "1px",
  height: 30,
  width: 90,
  borderRadius: 10,
  backgroundColor: "#cd040b",
  color: "#FFF",
  marginLeft: 100,
  marginRight: 50,
  marginTop: 20,
  outline: "none"
}
var clearButtonStyle = {
  marginTop: "1px",
  marginBottom: "1px",
  height: 30,
  width: 90,
  borderRadius: 10,
  backgroundColor: "rgba(241, 241, 241, 0.863)",
  color: "black",
  marginLeft: 50,
  marginRight: 50,
  marginTop: 20
}