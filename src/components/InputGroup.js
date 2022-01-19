import React, {Component} from 'react';

class InputGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const  {formFields, currentFieldsKey, storeInputData} = this.props;

        return(
            <div>
                {
                    Object.keys(formFields).map(fieldKey => {
                        const field = formFields[fieldKey];
                        return (
                            <div key={fieldKey}>
                                <label htmlFor={fieldKey}>{field.label}</label>
                                <input id={fieldKey} type={field.type} onChange={e => {storeInputData(e, currentFieldsKey)}}/>
                                <p>{field.value}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default InputGroup; 