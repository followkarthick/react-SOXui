import React, { Component } from 'react'; 

const  CheckBoxOnly = ({name, value, tick, onCheck}) => {
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

export default CheckBoxOnly;

