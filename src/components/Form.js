import React, {useState} from 'react';
import ContactInfo from './ContactInfo';
import WorkHistory from './WorkHistory';
import Education from './Education';

function Form() {
    const [activeSection, setActiveSection] = useState(0);

    function updateActiveSection(finishedSection) {
        setActiveSection(finishedSection + 1);
    }

    return (
        <form>
            <h1>Resume Builder</h1>
            <ContactInfo active={activeSection === 0} setActiveSection={setActiveSection}/>
            <WorkHistory active={activeSection === 1} setActiveSection={setActiveSection}/>
            <Education active={activeSection === 2} updateActiveSection={updateActiveSection}/>
            <div className='btn-wrapper'>
                <button>Preview</button>
            </div>
        </form>
    );
}

export default Form;