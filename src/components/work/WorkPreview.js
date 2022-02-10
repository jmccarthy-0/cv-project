import React from 'react';

function WorkPreview(props) {

    return (
        <div>
            <ul>
                {
                    props.workHistoryData.map((item, index) => {
                        return (
                            <li key={index}>
                                <p>{item.company}</p>
                                <p>{item.jobTitle}</p>
                                <button id={`${index}`} onClick={props.handleEditButton}>Edit</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default WorkPreview;