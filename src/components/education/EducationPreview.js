import React from 'react';

function EducationPreview(props) {
    function handleEditButton(e) {
        e.preventDefault();

        props.setEdit(true);

        const index = e.target.dataset.index;
        const educationItem = props.educationData[index];
        const newEducationFields = {};

        for (const field in props.educationFields) {
            newEducationFields[field] = {...props.educationFields[field]};
            newEducationFields[field].value = educationItem[field];
        }

        props.setActiveIndex(index);
        props.setEducationFields(newEducationFields);
        props.setActiveSection(1);
    }

    
    return (
        <div>
            <ul>
                {
                    props.educationData.map((item, index) => {
                        return (
                            <li key={index}>
                                <p>{item.institution}</p>
                                <p>{item.degree}</p>
                                <button data-index={`${index}`} onClick={handleEditButton}>Edit</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default EducationPreview;