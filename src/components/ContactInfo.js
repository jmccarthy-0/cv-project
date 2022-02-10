import React, { useState } from 'react';
import ContactInputs from './contact/ContactInputs';
import ContactPreview from './contact/ContactPreview'

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
            <h3>Contact Info</h3>
            <p>{props.active ? 'yes':'no'}</p>
            {
                props.active ? 
                    <ContactInputs contactFields={contactFields} setContactFields={setContactFields} updateActiveSection={props.updateActiveSection} />
                :
                    <ContactPreview contactFields={contactFields} updateActiveSection={props.updateActiveSection} />
            }
        </section>
    );
    
}

export default ContactInfo;