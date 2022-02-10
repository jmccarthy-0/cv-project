import React from 'react';

function ContactPreview(props) {

    return (
        <div>
            <button type="button">Edit</button>
            <p>{props.contactFields.firstName.value} {props.contactFields.lastName.value}</p>
        </div>
    );
}

export default ContactPreview;