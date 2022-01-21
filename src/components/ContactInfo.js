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
                <div>
                    <InputGroup formFields={formFields} storeInputData={storeInputData} currentFieldsKey="contactInfoFields"/>
                    
                    <button>Continue</button>
                </div>
                <div>
                    <button>Edit</button>
                    <p>{formFields.firstName.value} {formFields.lastName.value}</p>
                </div>
            </section>
        );
    }
}

export default ContactInfo;