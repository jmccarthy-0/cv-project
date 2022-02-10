import React, {useState, useEffect} from 'react';
import EducationInputs from './education/EducationInputs';
import EducationPreview from './education/EducationPreview';
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
            <h3>Education</h3>
            <p>{props.active ? 'yes':'no'}</p>

            {props.active && <EducationInputs educationFields={educationFields} setEducationFields={setEducationFields} handleClick={handleClick} updateActiveSection={props.updateActiveSection} />}
            
            <EducationPreview />       
        </section>
    );
    
} 

export default Education;