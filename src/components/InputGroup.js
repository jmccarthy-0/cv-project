import React, {Component} from 'react';

class InputGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {fields} = this.props;
        return(
            <div>
                {
                    Object.keys(fields).map(fieldKey => {
                        const field = fields[fieldKey];
                        return (
                            <div key={fieldKey}>
                                <label for={fieldKey}>{field.label}</label>
                                <input id={fieldKey} type={field.type}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default InputGroup; 