import React, {useEffect} from 'react';
import { clearInputs, handleObject } from '../../utilities/helper';

function MultiItemInputs(props) {
    useEffect(() => {
        clearInputs(props.fields, props.setFields);
    }, [props.dataArray]);

    function handleAddButton(e, index) {
        e.preventDefault();
        const newItem = {};
        let empty = true;

        for (const field in props.fields) {
            if (empty && props.fields[field].value !== '') {
                empty = false;
            }

            newItem[field] = props.fields[field].value
        };

        if (props.edit) {
            if (!empty) {
                const newDataArray = [...props.dataArray];
                newDataArray[index] = newItem;
                props.setDataArray(newDataArray);
            }

            props.setEdit(false);
            props.setActiveIndex('');
        } else {
            !empty && props.setDataArray([...props.dataArray, newItem]);
        }
    }

    return (
        <div>
            {
                Object.keys(props.fields).map(field => {
                    let input;

                    if (field !== 'description') {
                        input = <input type="text" id={field} name={field} value={props.fields[field].value} placeholder={props.fields[field].placeholder ? props.fields[field].placeholder : ''} onChange={e => handleObject(e.target, props.fields, props.setFields)}/>
                    } else {
                        input = <textarea id={field} name={field} value={props.fields[field].value} onChange={e => handleObject(e.target, props.fields, props.setFields)}/>
                    }

                    return (
                        <div className='form-group' key={field}>
                            <label htmlFor="field">{props.fields[field].label}</label>
                            {input}
                        </div>
                    );
                })
            }


            <button onClick={e => handleAddButton(e, props.activeIndex)}>Add Experience</button>
        </div>
    );
}

export default MultiItemInputs;

