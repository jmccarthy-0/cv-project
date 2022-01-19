import React, {Component} from 'react';
import InputGroup from './InputGroup';

class ContactInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const  {formFields, storeInputData} = this.props;

        return (
            <section>
                <InputGroup formFields={formFields} storeInputData={storeInputData} currentFieldsKey="contactInfoFields"/>
                
                <button>Continue</button>
            </section>
        );
    }
}

export default ContactInfo;