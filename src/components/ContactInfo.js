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
        <section className={`${props.active ? 'is-active' : ''}`}>
            <h2 className='form-section-heading'>Contact Info</h2>
            
            {
                props.active ? 
                    <ContactInputs contactFields={contactFields} setContactFields={setContactFields} setActiveSection={props.setActiveSection} />
                :
                    <ContactPreview contactFields={contactFields} setActiveSection={props.setActiveSection} />
            }
        </section>
    );
    
}

export default ContactInfo;