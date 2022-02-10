import React from 'react';
import { handleObject } from '../../utilities/helper';

function ContactInputs(props) {
    return (
        <div>                
            {
                Object.keys(props.contactFields).map(field => {
                    return (
                        <div key={field}>
                            <label htmlFor="field">{props.contactFields[field].label}</label>
                            <input type="text" id={field} name={field} value={props.contactFields[field].value} onChange={e => handleObject(e.target, props.contactFields, props.setContactFields)}/>
                        </div>
                    );
                })
            }

            <button type="button" onClick={e => {props.updateActiveSection(0)}}>Continue</button>
        </div>
    );
}

export default ContactInputs;