import React, {useState, useEffect} from 'react';
import { handleObject, clearInputs } from '../utilities/helper'


function WorkHistory(props) {
    // Hooks
    const [activeState, setActiveState] = useState(false);

    const [workHistoryFields, setWorkHistoryFields] = useState({
        jobTitle: {label: 'Job Title', value: ''},
        company: {label: 'Company Name', value: ''},
        workCity: {label: 'City', value: ''},
        workState: {label: 'State', value: ''},
        startDate: {label: 'Start Date',value: ''},
        endDate: {label: 'End Date', value: ''},
        description: {label: 'Description', value: ''}
    });

    const [workHistoryData, setWorkHistoryData] = useState([]);

    useEffect(() => {
        clearInputs(workHistoryFields, setWorkHistoryFields);
    }, [workHistoryData]);

    // Functions
    function handleClick(e) {
        e.preventDefault();
        const newItem = {};

        for (const field in workHistoryFields) {
            newItem[field] = workHistoryFields[field].value
        };

        setWorkHistoryData([...workHistoryData, newItem]);
    }

    return (
            <section>
                {/* Form Section */}
                <div>
                    {
                        Object.keys(workHistoryFields).map(field => {
                            let input;

                            if (field !== 'description') {
                            input = <input type="text" id={field} name={field} value={workHistoryFields[field].value} onChange={e => handleObject(e.target, workHistoryFields, setWorkHistoryFields)}/>
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


                    <button onClick={handleClick}>Add Experience</button>
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
                                        <p>{item.workCity}, {item.workState}</p>
                                        <p>{item.startDate} - {item.endDate}</p>
                                        <p>{item.description}</p>
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