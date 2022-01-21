import React, {Component} from 'react';
import InputGroup from './InputGroup';

class WorkHistory extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.addWorkHistoryItem(e, this.props.formFields, 'workHistoryData');
    }

    render() {
        const  {formFields, storeInputData, workHistoryData} = this.props;

        return(
            <section>
                <InputGroup formFields={formFields} storeInputData={storeInputData} currentFieldsKey="workHistoryFields"/>

                <button onClick={this.handleClick}>Add Experience</button>
                
                <button>Continue</button>

                <ul>
                    {
                        workHistoryData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <p>{item.company.value}</p>
                                    <p>{item.jobTitle.value}</p>
                                    <p>{item.workCity.value}, {item.workState.value}</p>
                                    <p>{item.startDate.value} - {item.endDate.value}</p>
                                    <p>{item.description.value}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        );
    }
}

export default WorkHistory;