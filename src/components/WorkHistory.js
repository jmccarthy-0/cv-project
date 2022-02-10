import React, {useState, useEffect} from 'react';
import WorkInputs from './work/WorkInputs';
import WorkPreview from './work/WorkPreview'
import { handleObject, clearInputs } from '../utilities/helper'


function WorkHistory(props) {
    const [edit, setEdit] = useState(false);
    const [activeIndex, setActiveIndex] = useState('');

    // Hooks
    const [workHistoryFields, setWorkHistoryFields] = useState({
        jobTitle: {label: 'Job Title', value: ''},
        company: {label: 'Company Name', value: ''},
        workCity: {label: 'City', value: ''},
        workState: {label: 'State', value: ''},
        startDate: {label: 'Start Date',value: '', placeholder: 'mm/yyyy' },
        endDate: {label: 'End Date', value: '', placeholder: 'mm/yyyy' },
        description: {label: 'Description', value: ''}
    });

    const [workHistoryData, setWorkHistoryData] = useState([]);

    useEffect(() => {
        clearInputs(workHistoryFields, setWorkHistoryFields);
    }, [workHistoryData]);

    // Functions (MOVE TO INDIVID COMPONENTS)
    function handleAddButton(e, index) {
        e.preventDefault();
        const newItem = {};
        let empty = true;

        for (const field in workHistoryFields) {
            if (empty && workHistoryFields[field].value !== '') {
                empty = false;
            }

            newItem[field] = workHistoryFields[field].value
        };

        if (edit) {
            if (!empty) {
                const newWorkHistory = [...workHistoryData];
                newWorkHistory[index] = newItem;
                setWorkHistoryData(newWorkHistory);
            }

            setEdit(false);
            setActiveIndex('');
        } else {
            !empty && setWorkHistoryData([...workHistoryData, newItem]);
        }
    }

    function handleEditButton(e) {
        e.preventDefault();

        setEdit(true);

        const index = e.target.id;
        const workItem = workHistoryData[index];
        const newWorkHistoryFields = {};

        for (const field in workHistoryFields) {
            newWorkHistoryFields[field] = {...workHistoryFields[field]};
            newWorkHistoryFields[field].value = workItem[field];
        }

        setActiveIndex(index);
        setWorkHistoryFields(newWorkHistoryFields);
        props.updateActiveSection(1);
    }

    return (
        <section>
            <h3>Work History</h3>
            <p>{props.active ? 'yes':'no'}</p>
            
            { props.active && <WorkInputs workHistoryFields={workHistoryFields} setWorkHistoryFields={setWorkHistoryFields} activeIndex={activeIndex} updateActiveSection={props.updateActiveSection} handleAddButton={handleAddButton} />}
                    
            <WorkPreview workHistoryData={workHistoryData} handleEditButton={handleEditButton}/>
            
            
        </section>
    );
}

export default WorkHistory;