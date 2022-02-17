import React, {useState} from 'react';
import EducationPreview from './education/EducationPreview';
import MultiItemInputs from './common/MultiItemInputs';

function Education(props) {
    const [edit, setEdit] = useState(false);
    const [activeIndex, setActiveIndex] = useState('');

    const [educationFields, setEducationFields] = useState({
                                                    institution: {label: 'School/Institution:', value: ''},
                                                    degree: {label: 'Degree', value: ''},
                                                    endDate: {label: 'End Date',value: '', placeholder: 'mm/yyyy' }
                                                });

    const [educationData, setEducationData] = useState([]);

    return (
        <section className={`${props.active ? 'is-active' : ''}`}>
            <h2 className='form-section-heading'>Education</h2>

            {props.active && 
                <MultiItemInputs 
                    fields={educationFields} 
                    setFields={setEducationFields}
                    dataArray={educationData}
                    setDataArray={setEducationData} 
                    activeIndex={activeIndex} 
                    setActiveIndex={setActiveIndex}
                    edit={edit}
                    setEdit={setEdit} />}
            
            <EducationPreview 
                educationFields={educationFields}
                setEducationFields={setEducationFields} 
                educationData={educationData}
                setActiveIndex={setActiveIndex}    
                setActiveSection={props.setActiveSection}
                setEdit={setEdit} />       
        </section>
    );
    
} 

export default Education;