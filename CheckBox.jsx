import React, { Component } from 'react'; 

const  CheckBox = ({name, value, tick, onCheck}) => {
                return (
                   
                        <input
                            name={name}
                            type="checkbox"
                            value={value}
                            checked={tick || false}
                            onChange={onCheck}
                        />
                        
                );
            }

export default CheckBox;

