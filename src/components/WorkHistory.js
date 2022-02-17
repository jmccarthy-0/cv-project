import React, {useState} from 'react';
import MultiItemInputs from './common/MultiItemInputs';
import WorkPreview from './work/WorkPreview'

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

   
    return (
        <section className={`${props.active ? 'is-active' : ''}`}>
            <h2 className='form-section-heading'>Work History</h2>
            
            { props.active && 
                <MultiItemInputs 
                    fields={workHistoryFields} 
                    setFields={setWorkHistoryFields}
                    dataArray={workHistoryData}
                    setDataArray={setWorkHistoryData} 
                    activeIndex={activeIndex} 
                    setActiveIndex={setActiveIndex}
                    edit={edit}
                    setEdit={setEdit} /> }
                    
            <WorkPreview
                workHistoryFields={workHistoryFields}
                setWorkHistoryFields={setWorkHistoryFields} 
                workHistoryData={workHistoryData}
                setActiveIndex={setActiveIndex}    
                setActiveSection={props.setActiveSection}
                setEdit={setEdit} />
            
            {props.active && <button type="button" onClick={e => {props.setActiveSection(2)}} disabled={workHistoryData.length===0}>Continue</button>}
        </section>
    );
}

export default WorkHistory;