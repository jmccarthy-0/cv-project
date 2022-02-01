import React, {useState} from 'react';
import InputGroup from './InputGroup';

function Education(props) {
    const [activeState, setActiveState] = useState(false);

 
    const  {formFields, storeInputData, educationData} = this.props;

    return (
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

export default Education;