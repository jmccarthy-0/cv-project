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
            <ContactInfo active={activeSection === 0} updateActiveSection={updateActiveSection}/>
            <WorkHistory active={activeSection === 1} updateActiveSection={updateActiveSection}/>
            <Education active={activeSection === 2} updateActiveSection={updateActiveSection}/>
        </form>
    );
}

export default Form;