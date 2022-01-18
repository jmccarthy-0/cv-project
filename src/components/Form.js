import React, {Component} from 'react';
import ContactInfo from './ContactInfo';
import WorkHistory from './WorkHistory';

class Form extends Component {
    render() {
        return (
            <form>
                <ContactInfo />
                <WorkHistory />
            </form>
        );
    }
}

export default Form;