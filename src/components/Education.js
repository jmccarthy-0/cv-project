import React, {useState, useEffect} from 'react';
import { handleObject, clearInputs } from '../utilities/helper'


function Education(props) {
    const [educationFields, setEducationFields] = useState({
                                                    institution: {label: 'School/Institution:', value: ''},
                                                    degree: {label: 'Degree', value: ''},
                                                    endDate: {label: 'End Date',value: '', placeholder: 'mm/yyyy' }
                                                });

    const [educationData, setEducationData] = useState([]);
 
    useEffect(() => {
        clearInputs(educationFields, setEducationFields);
    }, [educationData]);

    // Functions
    function handleClick(e) {
        e.preventDefault();
        const newItem = {};

        for (const field in educationFields) {
            newItem[field] = educationFields[field].value
        };

        setEducationData([...setEducationData, newItem]);
    }

    return (
        <section>
            {
                Object.keys(educationFields).map(field => {
                    return (
                        <div key={field}>
                            <label htmlFor="field">{educationFields[field].label}</label>
                            <input type="text" id={field} name={field} value={educationFields[field].value} placeholder={educationFields[field].placeholder ? educationFields[field].placeholder : ''} onChange={e => handleObject(e.target, educationFields, setEducationFields)}/>
                        </div>
                    );
                })
            }

            <button onClick={handleClick}>Add Education</button>
            
            <button>Continue</button>

            <ul>
                {
                    educationData.map(item => {
                        return (
                            <li>
                                <p>{item.institution.value}</p>
                                <p>{item.degree.value}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
    
} 

export default Education;