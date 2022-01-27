import React, {Component} from 'react';
import ContactInfo from './ContactInfo';
import WorkHistory from './WorkHistory';
import Education from './Education';

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
                },
                description: {
                    label: 'Description',
                    type: 'textarea',
                    value: ''
                }
            },
            educationFields: {
                institution: {
                    label: 'School/Institution:',
                    type: 'string',
                    value: ''
                },
                degree: {
                    label: 'Degree',
                    type: 'string',
                    value: ''
                },
                endDate: {
                    label: 'End Date',
                    type: 'date',
                    value: ''
                }
            },       
            workHistoryData: [],
            educationData: []
        }

        this.storeInputData = this.storeInputData.bind(this);
        this.addDataItem = this.addDataItem.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    storeInputData(e, currentFields) {
        const fields = {...this.state[currentFields]};
        fields[e.target.id].value = e.target.value;

        this.setState({
            [fields]: fields
        });
    }

    //Refactor for Education Section reuse
    addDataItem(e, stateObj, dataProperty) {
        e.preventDefault();
        const newItem = {};

        for (const field in stateObj) {
            newItem[field] = {
                label: stateObj[field].label,
                value: stateObj[field].value
            };
        }
        this.setState(prevState => ({
            [dataProperty]: [...prevState[dataProperty], newItem]
        }), this.clearInputs(stateObj));
    }

    clearInputs(stateObj) {
        const updatedFields = {};

        for (const field in stateObj) {
            updatedFields[field] = {};

            for (const detail in stateObj[field]) {
                if (detail === 'value') {
                    updatedFields[field][detail] = '';
                } else {
                    updatedFields[field][detail] = stateObj[field][detail];
                }
            }
        }

        let currentKey;
        for (const [key, value] of Object.entries(this.state)) {
            if (value === stateObj) {
                currentKey = key;
                break;
            }
        }

        this.setState({
            [currentKey]: updatedFields
        });
    }

    render() {

        return (
            <form>
                <ContactInfo formFields={this.state.contactInfoFields} 
                            storeInputData={this.storeInputData} 
                            active={true}/>
                <WorkHistory formFields={this.state.workHistoryFields} 
                            storeInputData={this.storeInputData} 
                            workHistoryData={this.state.workHistoryData}  
                            addWorkHistoryItem={this.addDataItem} 
                            active={false}/>
                <Education formFields={this.state.educationFields}
                            storeInputData={this.storeInputData} 
                            educationData={this.state.educationData}
                            addEducationItem={this.addDataItem}
                            active={false}/>
            </form>
        );
    }
}

export default Form;