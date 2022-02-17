import React from 'react';

function ContactPreview(props) {

    return (
        <div>
            <button type="button" onClick={e => props.setActiveSection(0)}>Edit</button>
            <p>{props.contactFields.firstName.value} {props.contactFields.lastName.value}</p>
            <p>{props.contactFields.primaryOccupation.value}</p>
        </div>
    );
}

export default ContactPreview;