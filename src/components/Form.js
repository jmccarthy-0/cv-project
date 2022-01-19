import React, {Component} from 'react';
import ContactInfo from './ContactInfo';
import WorkHistory from './WorkHistory';

class Form extends Component {
    constructor() {
        super();

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
            },
            workHistoryFields: {
                jobTitle: {
                    label: 'Job Title',
                    type: 'string',
                    value: ''
                },
                company: {
                    label: 'Company Name',
                    type: 'string',
                    value: ''
                },
                workCity: {
                    label: 'City',
                    type: 'string',
                    value: ''
                },
                workState: {
                    label: 'State',
                    type: 'string',
                    value: ''
                },
                startDate: {
                    label: 'Start Date',
                    type: 'date',
                    value: ''
                },
                endDate: {
                    label: 'End Date',
                    type: 'date',
                    value: ''
                }
            },
            workHistoryData = []
        }

        this.storeInputData = this.storeInputData.bind(this);
        this.addWorkHistoryItem = this.addWorkHistoryItem.bind(this);
    }

    storeInputData(e, currentFields) {
        const fields = {...this.state[currentFields]};
        fields[e.target.id].value = e.target.value;

        this.setState({
            [fields]: fields
        });
    }

    addWorkHistoryItem(e) {
        e.preventDefault();
    }

    render() {

        return (
            <form>
                <ContactInfo formFields={this.state.contactInfoFields} storeInputData={this.storeInputData} />
                <WorkHistory formFields={this.state.workHistoryFields} storeInputData={this.storeInputData}/>
            </form>
        );
    }
}

export default Form;