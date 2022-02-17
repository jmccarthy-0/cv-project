import React from 'react';

function WorkPreview(props) {
    function handleEditButton(e) {
        e.preventDefault();

        props.setEdit(true);

        const index = e.target.dataset.index;
        const workItem = props.workHistoryData[index];
        const newWorkHistoryFields = {};

        for (const field in props.workHistoryFields) {
            newWorkHistoryFields[field] = {...props.workHistoryFields[field]};
            newWorkHistoryFields[field].value = workItem[field];
        }

        props.setActiveIndex(index);
        props.setWorkHistoryFields(newWorkHistoryFields);
        props.setActiveSection(1);
    }

    return (
        <div>
            <ul>
                {
                    props.workHistoryData.map((item, index) => {
                        return (
                            <li key={index}>
                                <p>{item.company}</p>
                                <p>{item.jobTitle}</p>
                                <button data-index={`${index}`} onClick={handleEditButton}>Edit</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default WorkPreview;