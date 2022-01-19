import React, {Component} from 'react';
import InputGroup from './InputGroup';

class WorkHistory extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            workHistoryFields: {
                jobTitle: {
                    label: 'Job Title',
                    type: 'string'
                },
                company: {
                    label: 'Company Name',
                    type: 'string'
                },
                workCity: {
                    label: 'City',
                    type: 'string'
                },
                workState: {
                    label: 'State',
                    type: 'string'
                },
                startDate: {
                    label: 'Start Date',
                    type: 'date'
                },
                endDate: {
                    label: 'End Date',
                    type: 'date'
                }
            },
            workHistory: []
        };
    }

    render() {
        const  {formFields, storeInputData} = this.props;

        return(
            <section>
                <InputGroup formFields={formFields} storeInputData={storeInputData} currentFieldsKey="workHistoryFields"/>

                <button>Add Experience</button>
                
                <button>Continue</button>
            </section>
        );
    }
}

export default WorkHistory;