import React, { useState } from 'react';
import { handleObject } from '../utilities/helper';
import InputGroup from './InputGroup';


function ContactInfo(props) {
    const [contactFields, setContactFields] = useState({
        firstName: {label: 'First Name', value: ''},
        lastName: {label: 'Last Name', value: ''},
        primaryOccupation: {label: 'Occupation Title', value: ''},
        email: {label: 'Email', value: ''},
        phone: {label: 'Phone', value: ''},
        contactCity: {label: 'City', value: ''},
        contactState: {label: 'State', value: ''},
        contactZip: {label: 'Zip', value: ''}
     });
                           

    return (
        <section>
            <div>                
                {
                    Object.keys(contactFields).map(field => {
                        return (
                            <div key={field}>
                                <label htmlFor="field">{contactFields[field].label}</label>
                                <input type="text" id={field} name={field} value={contactFields[field].value} onChange={e => handleObject(e.target, contactFields, setContactFields)}/>
                            </div>
                        );
                    })
                }

                <button>Continue</button>
            </div>
            <div>
                <button>Edit</button>
                <p>{contactFields.firstName.value} {contactFields.lastName.value}</p>
            </div>
        </section>
    );
    
}

export default ContactInfo;