import React, {Component} from 'react';

class InputGroup extends Component {
    render() {
        const  {formFields, currentFieldsKey, storeInputData} = this.props;

        return(
            <div>
                {
                    Object.keys(formFields).map(fieldKey => {
                        const field = formFields[fieldKey];
                        let input;
                        if (field.type === 'textarea') {
                            input = <textarea id={fieldKey} value={field.value} onChange={e => {storeInputData(e, currentFieldsKey)}}></textarea>
                        } else {
                            input = <input id={fieldKey} type={field.type} value={field.value} onChange={e => {storeInputData(e, currentFieldsKey)}}/>
                        }

                        return (
                            <div key={fieldKey}>
                                <label htmlFor={fieldKey}>{field.label}</label>
                                {input}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default InputGroup; 