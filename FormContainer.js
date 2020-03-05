import React, { Component } from 'react';
import Input from './Input';
import Button from './Button'
import styled from 'styled-components';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: {
        applicationName: '',
        managerName:'',
        gitLabDetails:'',
        dbDetails:'',
        linuxServerDetails:'',
        weblogicDetails:''
      }

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleApplicationName = this.handleApplicationName.bind(this)
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
  }
handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
handleChange(event) {
    this.setState({value: event.target.value});
  }

  /* This life cycle hook gets executed when the component mounts 

  handleFormSubmit(event) {
    // Form submission logic
    //event.preventDefault();
    alert( JSON.stringify(userData));
    let userData = this.state.searchInput;

    fetch('http://example.com', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      })
    })
  }
  //...
  handleClearForm() {
    // Logic for resetting the form
    //e.preventDefault();
    this.setState({
      searchInput: {
        applicationName: ''
      },
    })
  }
  //...
  handleApplicationName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      searchInput:
      {
        ...prevState.searchInput, applicationName: value
      }
    }))

  }
  //...*/
  
  render() {   
    
    return (
      <div>
        <TitleHeader>Segregation Of Duties  </TitleHeader>
        <SearchContainer>
          <CardBox>
            <CardBoxHeader> Search Options</CardBoxHeader>
            
              <Input type={'text'}
                title={'ApplicationName'}
                name={'applicationName'}
                value={this.state.searchInput.applicationName}
                placeholder={'Enter your Application Name'}
                handleChange={this.handleChange}
              /> {/* Name of the Application */}
              <Input type={'text'}
                title={'Manager'}
                name={'manager'}
                value={this.state.searchInput.manager}
                placeholder={'Enter your Manager Name'}
                handleChange={this.handleManager}
              /> {/* Name of the manager */}
              <Input type={'text'}
                title={'GITLAB Details'}
                name={'gitLabDetails'}
                value={this.state.searchInput.gitLabDetails}
                placeholder={'Enter GITLAB Details'}
                handleChange={this.handleGitLabDetails}
              /> {/* Name of the gitLabDetails */}
              <Input type={'text'}
                title={'DB Details'}
                name={'dbDetails'}
                value={this.state.searchInput.dbDetails}
                placeholder={'Enter DB Details'}
                handleChange={this.handleDBDetails}
              /> {/* Name of the dbDetails */}
              <Input type={'text'}
                title={'Linux Server Details'}
                name={'linuxServerDetails'}
                value={this.state.searchInput.linuxServerDetails}
                placeholder={'Enter Linux Server Details'}
                handleChange={this.handleLinuxServerDetails}
              /> {/* Name of the linuxServerDetails */}
              <Input type={'text'}
                title={'Weblogic Server Details'}
                name={'weblogicDetails'}
                value={this.state.searchInput.weblogicDetails}
                placeholder={'Enter Weblogic Server Details'}
                handleChange={this.handleWeblogicDetails}
              /> {/* Name of the weblogicDetails */}


              <Button style={submitButtonStyle}type="submit" 
                onClick={this.handleSubmit} title={'SUBMIT'} /> { /*Submit */}
              <Button style={clearButtonStyle}
                onClick={this.handleClearForm} title={'CLEAR'} /> {/* Clear the form */}
            
          </CardBox>
        </SearchContainer>
      </div>
    );
  }
}

export default FormContainer;
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
    display: block;
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
      marginLeft: 50,
      marginRight: 50,
      marginTop: 20
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