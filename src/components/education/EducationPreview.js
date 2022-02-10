import React from 'react';

function EducationPreview(props) {
    
    return (
        <div>
            <ul>
                {
                    props.educationData.map(item => {
                        return (
                            <li>
                                <p>{item.institution.value}</p>
                                <p>{item.degree.value}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default EducationPreview;