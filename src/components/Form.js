import React, {Component} from 'react';
import ContactInfo from './ContactInfo';
import WorkHistory from './WorkHistory';
import Education from './Education';

class Form extends Component {
    constructor() {
        super();

        this.state = {
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
    }


    render() {

        return (
            <form>
                <ContactInfo active={true}/>
                <WorkHistory active={false}/>
                <Education active={false}/>
            </form>
        );
    }
}

export default Form;