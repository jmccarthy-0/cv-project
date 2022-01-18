import React, {Component} from 'react';
import InputGroup from './InputGroup';

class ContactInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contactInfoFields: {
                firstName: {
                    label: 'First Name',
                    type: 'string',
                    value: ''
                },
                lastName: {
                    label: 'Last Name',
                    type: 'string',
                    value: ''
                },
                primaryJobTitle: {
                    label: 'Job Title',
                    type: 'string',
                    value: ''
                },
                email: {
                    label: 'Email',
                    type: 'string',
                    value: ''
                },
                phone: {
                    label: 'Phone',
                    type: 'string',
                    value: ''
                },
                city: {
                    label: 'City',
                    type: 'string',
                    value: ''
                },
                state: {
                    label: 'State',
                    type: 'string',
                    value: ''
                },
                zip: {
                    label: 'Zip',
                    type: 'string',
                    value: ''
                }
            }
        }
    }

    render() {
        const {contactInfoFields} = this.state;

        return (
            <section>
                <InputGroup fields={contactInfoFields} />
               
                <button>Continue</button>
            </section>
        );
    }
}

export default ContactInfo;