import React from 'react';
import { handleObject, clearInputs } from '../../utilities/helper'

function EducationInputs(props) {
    return (
        <div>
            {
                Object.keys(props.educationFields).map(field => {
                    return (
                        <div key={field}>
                            <label htmlFor="field">{props.educationFields[field].label}</label>
                            <input type="text" id={field} name={field} value={props.educationFields[field].value} placeholder={props.educationFields[field].placeholder ? props.educationFields[field].placeholder : ''} onChange={e => handleObject(e.target, props.educationFields, props.setEducationFields)}/>
                        </div>
                    );
                })
            }

            <button onClick={props.handleClick}>Add Education</button>
            
            <button type="button" onClick={e => {props.updateActiveSection(2)}}>Continue</button>
        </div>
    );
}

export default EducationInputs;