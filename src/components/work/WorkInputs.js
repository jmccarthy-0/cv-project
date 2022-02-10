import React from 'react';
import { handleObject } from '../../utilities/helper';

function WorkInputs(props) {
    return (
        <div>
            {
                Object.keys(props.workHistoryFields).map(field => {
                    let input;

                    if (field !== 'description') {
                        input = <input type="text" id={field} name={field} value={props.workHistoryFields[field].value} placeholder={props.workHistoryFields[field].placeholder ? props.workHistoryFields[field].placeholder : ''} onChange={e => handleObject(e.target, props.workHistoryFields, props.setWorkHistoryFields)}/>
                    } else {
                        input = <textarea id={field} name={field} value={props.workHistoryFields[field].value} onChange={e => handleObject(e.target, props.workHistoryFields, props.setWorkHistoryFields)}/>
                    }

                    return (
                        <div key={field}>
                            <label htmlFor="field">{props.workHistoryFields[field].label}</label>
                            {input}
                        </div>
                    );
                })
            }


            <button onClick={e => props.handleAddButton(e, props.activeIndex)}>Add Experience</button>
            <button type="button" onClick={e => {props.updateActiveSection(1)}}>Continue</button>
        </div>
    );
}

export default WorkInputs;

