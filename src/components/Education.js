import React, {Component} from 'react';
import InputGroup from './InputGroup';

class Education extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.addEducationItem(e, this.props.formFields, 'educationData');
    }

    render() {
        const  {formFields, storeInputData, educationData} = this.props;

        return(
            <section>
                <InputGroup formFields={formFields} storeInputData={storeInputData} currentFieldsKey="educationFields"/>

                <button onClick={this.handleClick}>Add Education</button>
                
                <button>Continue</button>

                <ul>
                    {
                        educationData.map(item => {
                            return (
                                <li>
                                    <p>{item.institution.value}</p>
                                    <p>{item.degree.value}</p>
                                    <p>{item.endDate.value}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        );
    }
} 

export default Education;