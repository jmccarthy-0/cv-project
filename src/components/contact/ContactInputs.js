import React from 'react';
import { handleObject } from '../../utilities/helper';

function ContactInputs(props) {
    return (
        <div>
            <div className='form-input-collection'>
                {
                    Object.keys(props.contactFields).map(field => {
                        return (
                            <div className="form-input-group" key={field}>
                                <label htmlFor="field">{props.contactFields[field].label}</label>
                                <input type="text" id={field} name={field} value={props.contactFields[field].value} onChange={e => handleObject(e.target, props.contactFields, props.setContactFields)}/>
                            </div>
                        );
                    })
                }
            </div>                
            <div className='btn-wrapper'>
                <button type="button" onClick={e => {props.setActiveSection(1)}} disabled={props.contactFields.firstName.value === '' || props.contactFields.lastName.value === ''}>Continue</button>
            </div>
        </div>
    );
}

export default ContactInputs;