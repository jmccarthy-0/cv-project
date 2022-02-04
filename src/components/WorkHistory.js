import React, {useState, useEffect} from 'react';
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

    // Functions
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
            const newWorkHistory = [...workHistoryData];
            newWorkHistory[index] = newItem;
            setWorkHistoryData(newWorkHistory);

            setEdit(false);
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
    }

    return (
            <section>
                <h3>Work History</h3>
                {/* Form Section */}
                <div>
                    {
                        Object.keys(workHistoryFields).map(field => {
                            let input;

                            if (field !== 'description') {
                            input = <input type="text" id={field} name={field} value={workHistoryFields[field].value} placeholder={workHistoryFields[field].placeholder ? workHistoryFields[field].placeholder : ''} onChange={e => handleObject(e.target, workHistoryFields, setWorkHistoryFields)}/>
                            } else {
                                input = <textarea id={field} name={field} value={workHistoryFields[field].value} onChange={e => handleObject(e.target, workHistoryFields, setWorkHistoryFields)}/>
                            }

                            return (
                                <div key={field}>
                                    <label htmlFor="field">{workHistoryFields[field].label}</label>
                                    {input}
                                </div>
                            );
                        })
                    }


                    <button onClick={e => handleAddButton(e, activeIndex)}>Add Experience</button>
                    <button>Continue</button>
                </div>
                
                {/* Preview */}
                <div>
                    <ul>
                        {
                            workHistoryData.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <p>{item.company}</p>
                                        <p>{item.jobTitle}</p>
                                        <button id={`${index}`} onClick={handleEditButton}>Edit</button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </section>
    );
}

export default WorkHistory;